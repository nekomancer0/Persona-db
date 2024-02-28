import e, { Router } from 'express';
import usersRoute from './routes/users';
import charactersRoute from './routes/characters';
import uploadRoute from './routes/upload';
import changelogsRoute from './routes/changelogs';
import cookieParser from 'cookie-parser';
import logger from './logger';
import path from 'node:path';
import cookieSession from 'cookie-session';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Server } from 'node:http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const route = Router();

function APIHandler(app: e.Express, server: Server) {
	app.use((req, res, next) => {
		console.log(req.headers);
		res.header('Access-Control-Allow-Origin', req.headers.origin || req.headers['host']);

		let blockedIps = ['54.66.245.129', '146.190.197.169', '172.104.41.253'];

		let block = false;
		for (let ip of blockedIps) {
			if (req.headers['x-forwarded-for']?.includes(ip)) {
				block = true;
				console.log(`Blocked`);
			}
		}

		if (block) res.send('blocked');
		else next();
	});

	route.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', req.headers.origin || req.headers['host']);
		res.header('Access-Control-Allow-Credentials', 'true');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');

		next();
	});

	route.use('/files', e.static(path.join(__dirname, 'files')));

	route.use(e.json());
	route.use(e.urlencoded());

	route.use(cookieParser());
	route.use(
		cookieSession({
			secret: randomUUID(),
			httpOnly: false,
			sameSite: 'strict',
			path: '/',
			domain: 'persona-db.xyz',
			maxAge: Date.now() + 2592000000
		})
	);

	route.use(logger);

	route.get('/', (req, res) => {
		res.send('Hello World');
	});

	route.use('/characters', charactersRoute);
	route.use('/users', usersRoute);
	route.use('/upload', uploadRoute);
	route.use('/changelogs', changelogsRoute);

	return route;
}

export default { APIHandler };
