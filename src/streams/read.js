import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const stream = fs.createReadStream(path.resolve(__dirname, 'files/fileToRead.txt'), 'utf8');

    stream.on("data",(chunk) => {
        process.stdout.write(chunk)
        console.log(chunk);
    });
    console.log(process.stdout);
};

read()