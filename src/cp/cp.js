import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    let filename = fileURLToPath(import.meta.url);
    let childrenPath = join(dirname(filename), 'files/script.js');

    let children = spawn('node', [childrenPath, ...args.slice(2)]);

    children.stdout.on('data', (data) => {
        console.log('children"', data.toString());
    });

    process.stdin.pipe(children.stdin);
};

spawnChildProcess(process.argv);