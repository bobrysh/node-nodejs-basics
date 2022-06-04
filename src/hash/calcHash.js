import * as crypto from 'crypto';
import read from 'src\fs\read.js'

export const calculateHash = async () => {
    const str = "Calculate hash for me!"; 
    // const str = read(`src\hash\files\fileToCalculateHashFor.txt`) // что то с импортом рид функции...=\
    console.log(crypto.createHash('sha256').update(str).digest('hex'))
};

calculateHash();