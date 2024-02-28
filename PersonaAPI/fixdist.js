import { readFileSync, writeFileSync } from 'fs';

const indexContent = readFileSync('./dist/index.js', 'utf-8');

let newContent = indexContent.replace(
	'import { handler } from "./build/handler";',
	"import { handler } from '../build/handler.js';"
);

writeFileSync('./dist/index.js', newContent, 'utf-8');
