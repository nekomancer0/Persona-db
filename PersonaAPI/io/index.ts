import { Server } from 'socket.io';
import { db } from '../mongo';
import { ObjectId } from 'mongodb';
let users = db.collection('users');
let messages = db.collection('messages');

export default function IOHandler(io: Server) {
	let sessions: { sessionId: string; user: any }[] = [];

	io.on('connection', async (socket) => {
		let user: any = null;

		socket.on(
			'session',
			async (sessionId: string, token: string | null, callback: (u: any) => void) => {
				if (sessions.find((s) => s.sessionId === sessionId)) {
					socket.disconnect(true);
					socket.removeAllListeners();
					return;
				}

				if (!token) sessions.push({ sessionId, user: null });

				if (token) {
					user = await users.findOne({ token });
					if (!user) return;

					console.log(`${user.username} (${user._id.toString()}) joined the website`);
					await users.updateOne({ token }, { $set: { online: true } });

					socket.on('get_messages', async (callback) => {
						let allMessages = await messages.find().toArray();
						let parsedAllmessages = [];

						for (let msg of allMessages) {
							if (msg.targetId) {
								if (user._id.equals(msg.targetId)) {
									parsedAllmessages.push({
										username: user.username,
										content: msg.content,
										targetId: msg.targetId ? msg.targetId : null
									});
								}
							} else {
								let u = await users.findOne({ _id: new ObjectId(msg.userId) });
								if (u) {
									parsedAllmessages.push({
										username: u!.username,
										content: msg.content,
										targetId: msg.targetId ? msg.targetId : null
									});
								}
							}
						}

						await callback(parsedAllmessages);
					});

					socket.on('message', async (content, target) => {
						if (!content) return;

						await messages.insertOne({
							createdAt: Date.now(),
							userId: user._id,
							content,
							targetId: target ? target._id : null
						});

						for (let [id, socket] of io.sockets.sockets) {
							socket.emit('message', {
								username: user.username,
								content,
								targetId: target ? target._id : null
							});
						}
					});

					if (user.admin) {
						socket.on('dashbord', () => {
							socket.on('get_users', async (callback: (users: any[]) => void) => {
								callback(await users.find().toArray());
							});

							socket.on('delete_user', async (userId: string, message: (str: string) => void) => {
								let u = await users.findOne({ _id: new ObjectId(userId) });

								if (u?.admin) {
									message("Can't delete an admin user");
								} else await users.deleteOne({ _id: u?._id });
							});
						});
					}

					callback(user);
				}
			}
		);

		io.sockets.emit('guest_count', io.sockets.sockets.size);

		socket.on('disconnect', async () => {
			if (!user) return;

			await users.updateOne({ token: user.token }, { $set: { online: false } });
			console.log(`${user.username} (${user._id.toString()}) left the website`);
		});

		socket.on('disconnect', () => {
			io.emit('guest_count', io.sockets.sockets.size);
		});
	});
}
