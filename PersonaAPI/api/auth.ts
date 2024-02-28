import { RequestHandler } from 'express';
import { db } from '../mongo';
const collection = db.collection('users');

let auth: RequestHandler = async (req, res, next) => {
	let token = req.cookies['token'] || req.headers['authorization'];
	if (!token) return res.status(403).json({ message: 'Authorization not provided' });

	let user = await collection.findOne({ token });
	if (user) {
		next();
	} else {
		res.clearCookie('token');
		res.status(403).json({ message: 'Invalid authorization' });
	}
};

export default auth;
