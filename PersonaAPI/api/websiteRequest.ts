import { RequestHandler } from 'express';

// Website Request
/* {
  host: 'persona-db.xyz',
  'x-forwarded-proto': 'http',
  'x-real-ip': '',
  'x-forwarded-for': '',
  connection: 'close',
  'content-length': '69',
  'accept-encoding': 'gzip',
  'cf-ray': '85c244db4da06985-CDG',
  'cf-visitor': '{"scheme":"https"}',
  'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
  accept: 'application/json, text/plain, *\/*',
  'content-type': 'application/json',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'sec-ch-ua-platform': '"Windows"',
  origin: 'https://persona-db.xyz',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  referer: 'https://persona-db.xyz/login',
  'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
  priority: 'u=1, i',
  'cf-connecting-ip': '',
  'cdn-loop': 'cloudflare',
  'cf-ipcountry': 'FR'
}
*/

// Application Request
/*
{
  host: 'persona-db.xyz',
  'x-forwarded-proto': 'http',
  'x-real-ip': '',
  'x-forwarded-for': '',
  connection: 'close',
  'content-length': '2',
  'accept-encoding': 'gzip',
  'cf-ray': '85c24819684104a8-CDG',
  'cf-visitor': '{"scheme":"https"}',
  accept: 'application/json, text/plain',
  'content-type': 'application/json',
  'user-agent': 'axios/1.6.7',
  'cf-connecting-ip': '',
  'cdn-loop': 'cloudflare',
  'cf-ipcountry': 'FR'
}*/

let websiteRequest: RequestHandler = async (req, res, next) => {
	if (req.headers['referer'] && req.headers['referer'].includes('persona-db.xyz')) next();
	else res.status(403).json({ message: 'this request is only allowed on the website' });
};

export default websiteRequest;
