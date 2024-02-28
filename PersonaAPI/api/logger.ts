import { RequestHandler } from 'express';
import { db } from '../mongo';
// import chalk from 'chalk'; Module Incompatibility

const collection = db.collection('users');

let logger: RequestHandler = async (req, res, next) => {
	let token = req.cookies['token'] || req.headers['authorization'];

	let userData = token ? await collection.findOne({ token }) : null;
	let userStr = userData ? `${userData.username} (${userData._id.toString()})` : 'anonymous';

	console.log(
		`${req.method.toUpperCase()} ${req.path} ${userStr} (${req.headers['x-forwarded-for']})`
	);
	next();
};

export default logger;
