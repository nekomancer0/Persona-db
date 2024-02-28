import { Server } from 'socket.io';
import { db } from '../mongo';
import { ObjectId } from 'mongodb';
let users = db.collection('users');
let messages = db.collection('messages');

export default function IOHandler(io: Server) {
	io.on('connection', async (socket) => {
		socket.on('login', async (token: string, callback: (user: any) => Promise<void>) => {
			let user: any = await users.findOne({ token });
			if (!user) return;

			await users.updateOne({ token }, { $set: { online: true } });

			await callback(user);

			console.log(`${user.username} (${user._id.toString()}) joined the website`);

			socket.emit('retrieve_messages', await doRetrieveMessages());

			async function doRetrieveMessages() {
				let allMessages = await messages.find().toArray();
				let parsedAllmessages = [];

				for (let msg of allMessages) {
					if (msg.targetId) {
						if (user._id.equals(msg.targetId)) {
							parsedAllmessages.push(msg);
						}
					} else parsedAllmessages.push(msg);
				}

				return parsedAllmessages;
			}

			socket.on('message', async (content, target) => {
				if (!content) return;

				await messages.insertOne({
					createdAt: Date.now(),
					userId: user._id,
					content,
					targetId: target ? target._id : null
				});

				for (let [id, socket] of io.sockets.sockets) {
					socket.emit('retrieve_messages', await doRetrieveMessages());
				}
			});

			socket.on('get_messages', async (callback) => {
				await callback(await doRetrieveMessages());
			});

			socket.on('disconnect', async () => {
				console.log(`${user.username} (${user._id.toString()}) left the website`);

				await users.updateOne({ token: user.token }, { $set: { online: false } });
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
		});
	});
}
