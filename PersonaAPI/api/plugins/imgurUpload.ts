import { Client as ImgurClient } from '@rmp135/imgur';
import { readFileSync, rmSync } from 'fs';

let imgur = new ImgurClient({
	client_id: process.env.IMGUR_ID,
	client_secret: process.env.IMGUR_SECRET,
	access_token: process.env.IMGUR_ACCESS,
	refresh_token: process.env.IMGUR_REFRESH
});

export default async function upload(
	file: Express.Multer.File,
	name?: string
): Promise<{ url?: string; updated: boolean }> {
	let res: { url?: string; updated: boolean } = { updated: false };
	try {
		let result = await imgur.Image.upload(readFileSync(file.path, { encoding: 'base64' }), {
			name: file.filename
		});

		rmSync(file.path);

		res.url = result.data.link;
		res.updated = true;

		return res;
	} catch (e) {
		console.log(e);
		res.updated = true;
		return res;
	}
}
