import { RequestHandler } from 'express';
import { db } from '../mongo';
const collection = db.collection('users');

let adminAuth: RequestHandler = async (req, res, next) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	if (!token) return res.status(403).json({ message: 'Authorization not provided' });

	let user = await collection.findOne({ token });

	if (user) {
		if (user.admin) next();
		else {
			res.status(403).json({ message: 'Admin users can only perform that action' });
		}
	} else {
		res.clearCookie('token');
		res.status(403).json({ message: 'Invalid authorization' });
	}
};

export default adminAuth;
