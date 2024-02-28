import { Router } from 'express';
import { db } from '../../mongo';
import auth from '../auth';
import { ObjectId } from 'mongodb';

function generateID() {
	let res = '';
	let len = 6;
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

	for (let i = 0; i < len; i++) {
		res += chars[Math.floor(Math.random() * chars.length)];
	}

	return res;
}

const collection = db.collection('characters');
const users = db.collection('users');

const route = Router();

route.get('/:code?', async (req, res) => {
	if (req.params.code) {
		let chara = await collection.findOne({ code: req.params.code });
		if (chara) {
			res.json(chara);
		} else {
			res.status(404).json({ message: "couldn't find chara with code" });
		}
	} else {
		let charas = await collection.find().toArray();
		res.json(charas);
	}
});

route.post('/', auth, async (req, res) => {
	let { name, description, stats, tags, icon, refsheet } = req.body;

	if (!name || !description)
		return res.status(500).json({
			message: 'character creation must have: name, description.'
		});

	if (await collection.findOne({ name })) {
		res.status(500).json({ message: 'character already exists with name' });

		return;
	}

	let now = Date.now();
	let code = generateID();
	let owner = (await users.findOne({ token: req.cookies['token'] }))!;

	let result = await collection.insertOne({
		ownerId: owner._id,
		name,
		code,
		description,
		editedAt: now,
		createdAt: now,
		stats,
		tags,
		icon,
		refsheet
	});

	return res.json({
		message: 'OK',
		code,
		_id: result.insertedId
	});
});

route.delete('/:id', auth, async (req, res) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let u = (await users.findOne({ token }))!;
	if (!req.params.id) return res.status(500).json({ message: 'must provide character _id' });
	let chara = (await collection.findOne({ _id: new ObjectId(req.params.id) }))!;

	if (!u._id.equals(chara.ownerId)) {
		res.status(403).json({ message: 'you are not the owner' });
		return;
	}

	let result = await collection.deleteOne({
		_id: new ObjectId(req.params.id)
	});

	res.json({
		message: 'character deleted',
		isOk: result.acknowledged
	});
});

route.put('/', auth, async (req, res) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let u = (await users.findOne({ token }))!;
	let { _id, description, name, stats, tags, icon, refsheet } = req.body;
	if (!_id) return res.status(500).json({ message: 'must provide character _id' });

	let chara = (await collection.findOne({ _id: new ObjectId(_id) }))!;

	if (!u._id.equals(chara.ownerId)) {
		res.status(403).json({ message: 'you are not the owner' });
		return;
	}

	let updateObj: {
		description?: any;
		name?: string;
		stats?: {}[];
		tags?: string[];
		icon?: string;
		refsheet?: string;
	} = {};

	if (description) updateObj.description = description;
	if (name) updateObj.name = name;
	if (stats) updateObj.stats = stats;
	if (tags) updateObj.tags = tags;
	if (icon) updateObj.icon = icon;
	if (refsheet) updateObj.refsheet = refsheet;

	let result = await collection.updateOne({ _id: chara._id }, { $set: updateObj });
	res.json({ message: 'character updated', _id: result.upsertedId });
});

export default route;
