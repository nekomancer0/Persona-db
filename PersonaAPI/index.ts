import express from 'express';
import { Server } from 'socket.io';

import IOHandler from './io';
import API from './api';
import { handler } from './build/handler';

import dotenv from 'dotenv';
dotenv.config();

import http from 'node:http';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST']
	}
});

let route = API.APIHandler(app, server);

app.use('/api', route);
app.use(handler);

IOHandler(io);

server.listen(process.env.PORT, () => {
	console.log(
		`\n__________                                            _________                                \n\\______   \\ ___________  __________   ____ _____     /   _____/ ______________  __ ___________ \n |     ___// __ \\_  __ \\/  ___/  _ \\ /    \\\\__  \\    \\_____  \\_/ __ \\_  __ \\  \\/ // __ \\_  __ \\\n |    |   \\  ___/|  | \\/\\___ (  <_> )   |  \\/ __ \\_  /        \\  ___/|  | \\/\\   /\\  ___/|  | \\/\n |____|    \\___  >__|  /____  >____/|___|  (____  / /_______  /\\___  >__|    \\_/  \\___  >__|   \n               \\/           \\/           \\/     \\/          \\/     \\/                 \\/       \n`
	);

	console.log(`Server is listening\n`);

	console.log(`- Local : http://localhost:${process.env.PORT}`);
});
