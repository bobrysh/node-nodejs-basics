import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const stream = fs.createWriteStream(path.resolve(__dirname, 'files/fileToWrite.txt'), 'utf8');
    stream.write(JSON.stringify(process.stdin), 'utf8');
    stream.on("data",() => {
        console.log('test');
    });
    stream.end()
};

write()