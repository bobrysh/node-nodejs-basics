import * as fs from 'fs';
import * as zlib from 'zlib';


export const decompress = async (err) => {
    if (err) console.log("FS operation failed",err)
    const unzip = zlib.createUnzip();     
    const inp = fs.createReadStream('src/zip/archive.gz');   
    const out = fs.createWriteStream('src/zip/files/fileToCompress.txt');   
    inp.pipe(unzip).pipe(out);   
};

decompress();