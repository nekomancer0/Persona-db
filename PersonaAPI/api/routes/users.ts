import { Router } from 'express';
import { db } from '../../mongo';
import auth from '../auth';
import { compareSync, hashSync } from 'bcrypt';
import dayjs from 'dayjs';
import passwordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';
import { ObjectId } from 'mongodb';
import multer from 'multer';
import upload from '../plugins/imgurUpload';
import websiteRequest from '../websiteRequest';

let schema = new passwordValidator()
	.is()
	.min(8)
	.is()
	.max(30)
	.has()
	.uppercase()
	.has()
	.lowercase()
	.has()
	.digits()
	.has()
	.not()
	.spaces()
	.is()
	.not()
	.oneOf(['Passw0rd', 'Password123']);

const collection = db.collection('users');

function randomToken(): string {
	let len = 100;
	let ret = '';
	let chars = 'abcdefghijklmnopqrstuvwxyz1234567890.-';

	for (let i = 0; i < len; i++) {
		ret += chars[Math.floor(Math.random() * chars.length)];
	}

	return ret;
}

const route = Router();

route.get('/:id?', async (req, res) => {
	if (req.params.id) {
		let user = null;
		if (req.params.id.startsWith('@')) {
			let username = req.params.id.replace('@', '');
			user = await collection.findOne({ username });
		} else {
			user = await collection.findOne({ _id: new ObjectId(req.params.id) });
		}

		if (!user) return res.status(404).json({ message: "couldn't find user" });
		else {
			return res.json({
				username: user.username,
				_id: user._id,
				avatar: user.avatar,
				createdAt: user.createdAt,
				online: user.online
			});
		}
	} else {
		let users = [];

		let mongoUsers = await collection.find().toArray();

		for (let user of mongoUsers) {
			users.push({
				username: user.username,
				_id: user._id,
				avatar: user.avatar,
				createdAt: user.createdAt,
				online: user.online
			});
		}

		res.json(users);
	}
});

route.post('/', websiteRequest, async (req, res) => {
	let { username, email, password } = req.body;

	if (!username || !email || !password)
		return res.status(500).json({
			message: 'account creation must have: username, email and password.'
		});

	let u = (await collection.findOne({ username })) || (await collection.findOne({ email }));

	if (u) return res.status(500).json({ message: 'account already exists with email or username' });

	if (!schema.validate(password)) {
		res.status(500).json({
			message:
				'Must be secure password, must have at least, 1 digit, 1 uppercase, 1 lowercase, must not contain spaces'
		});

		return;
	}
	if (!EmailValidator.validate(email)) {
		res.status(500).json({
			message: 'Must be a valid email'
		});

		return;
	}

	let token = randomToken();
	let hashedPassword = hashSync(password, 10);

	let defaultIcons = [
		'/default-icons/default-icon-klee.jpg',
		'/default-icons/default-icon-luffy.jpg',
		'/default-icons/default-icon-makoto.jpg',
		'/default-icons/default-icon-masaru.jpg',
		'/default-icons/default-icon-slayer.jpg',
		'/default-icons/default-icon-venti.jpg'
	];

	let randomAvatar = defaultIcons[Math.floor(Math.random() * defaultIcons.length)];

	let result = await collection.insertOne({
		username,
		email,
		token,
		password: hashedPassword,
		createdAt: Date.now(),
		avatar: randomAvatar,
		ip: req.headers['x-forwarded-for']
	});

	res.cookie('token', token);

	return res.json({
		message: 'OK',
		token,
		_id: result.insertedId
	});
});

route.delete('/', auth, async (req, res) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let result = await collection.updateOne({ token }, { $set: { suspendedAt: Date.now() } });

	res.json({
		message: 'account suspended. Will be deleted in 30 days.',
		_id: result.upsertedId
	});
});

let singlerMulter = multer({ dest: './files' }).single('file');

route.put('/', auth, singlerMulter, async (req, res) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let u = (await collection.findOne({ token }))!;

	if (u.suspendedAt) {
		// https://stackoverflow.com/questions/66639760/dayjs-diff-between-two-date-in-day-and-hours Answer

		const date1 = dayjs(u.suspendedAt);
		const date2 = dayjs();

		let hours = date2.diff(date1, 'hours');
		const days = Math.floor(hours / 24);
		hours = hours - days * 24;

		res.status(403).json({
			message: `account suspended, ask the support to recover within ${days} days and ${hours} hours.`
		});

		return;
	}

	let { username, email, password, bio } = req.body;

	let updateObject: {
		username?: string;
		email?: string;
		password?: string;
		avatar?: string;
		bio?: string;
	} = {};

	let errorNotUpdated = [];

	if (username) {
		let u2 = await collection.findOne({ username });

		if (!u2) updateObject.username = username;
		else errorNotUpdated.push('username');
	}

	if (email) updateObject.email = email;
	if (bio) updateObject.bio = bio;
	if (password) updateObject.password = hashSync(password, 10);

	let isFileUpdated = false;

	if (req.file) {
		let uploadResult = await upload(req.file, u.name);
		if (uploadResult.url) updateObject.avatar = uploadResult.url;
		isFileUpdated = uploadResult.updated;
	}

	await collection.updateOne({ token: req.cookies['token'] }, { $set: updateObject });

	if (errorNotUpdated.length > 0) {
		if (errorNotUpdated.includes('username') && isFileUpdated) {
			res.json({
				message: "Username already exists. Avatar has been updated! <a href='/profile'>Reload</a>"
			});
		}

		if (errorNotUpdated.includes('username') && !isFileUpdated) {
			res.status(500).json({ message: 'Username already exists.' });
		}
	} else res.json({ message: "It has been updated! <a href='/profile'>Reload</a>" });
});

route.post('/login', async (req, res) => {
	let { username, password } = req.body;

	if (!username || !password)
		return res.status(500).json({ message: 'Username or password not provided' });

	let u = await collection.findOne({ username });

	if (!u || !compareSync(password, u.password))
		return res.status(404).json({ message: 'Cannot find account with username and password' });

	if (u.suspendedAt) {
		// https://stackoverflow.com/questions/66639760/dayjs-diff-between-two-date-in-day-and-hours Answer

		const date1 = dayjs(u.suspendedAt);
		const date2 = dayjs();

		let hours = date2.diff(date1, 'hours');
		const days = Math.floor(hours / 24);
		hours = hours - days * 24;

		res.status(403).json({
			message: `account suspended, ask the support to recover within ${days} days and ${hours} hours.`
		});

		return;
	}

	res.cookie('token', u.token);

	res.json({ message: 'Logged in', token: u.token });
});

route.post('/exchange', auth, async (req, res) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let u = (await collection.findOne({ token }))!;

	if (u.suspendedAt) {
		// https://stackoverflow.com/questions/66639760/dayjs-diff-between-two-date-in-day-and-hours Answer

		const date1 = dayjs(u.suspendedAt);
		const date2 = dayjs();

		let hours = date2.diff(date1, 'hours');
		const days = Math.floor(hours / 24);
		hours = hours - days * 24;

		res.status(403).json({
			message: `account suspended, ask the support to recover within ${days} days and ${hours} hours.`
		});

		return;
	}

	res.json({ ...u, message: 'OK' });
});

export default route;
