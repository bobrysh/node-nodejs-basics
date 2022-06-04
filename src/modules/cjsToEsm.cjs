const path = require('path');
require('./files/c');
const { release, version } = require('os');
const { createServer: createServerHttp } = require('http');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const unknownObject = Math.random() > 0.5 ? require('./files/a.json') : require('./files/b.json')

export const createMyServer = createServerHttp((_, res) => res.end('Request accepted'));
