import { Router } from 'express';
import adminAuth from '../adminAuth';
import { db } from '../../mongo';
const collection = db.collection('changelogs');
const users = db.collection('users');

let route = Router();

route.post('/', adminAuth, async (req, res) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let user = await users.findOne({ token });

	let { content } = req.body;

	collection.insertOne({
		createdAt: Date.now(),
		userId: user?._id.toString(),
		content
	});

	res.json({ message: 'ok' });
});

route.get('/', async (req, res) => {
	res.json(await collection.find().toArray());
});

export default route;
