import { Router } from 'express';
import multer from 'multer';
import upload from '../plugins/imgurUpload';

let route = Router();
let single = multer({ dest: './files' }).single('image');

route.post('/', single, async (req, res) => {
	if (req.file) {
		try {
			let result = await upload(req.file);

			if (result.url) {
				res.json({ url: result.url });
			} else {
				res.status(500).json({ message: 'error while uploading image' });
			}
		} catch (e) {
			console.log(e);
		}
	} else {
		res.status(500).json({ message: 'no file provided' });
	}
});

export default route;
