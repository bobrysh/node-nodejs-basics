import * as fs from 'fs';
import * as zlib from 'zlib';


export const compress = async (err) => {
    if (err) console.log("FS operation failed",err)
    const gzip = zlib.createGzip();   
    const inp = fs.createReadStream('src/zip/files/fileToCompress.txt');   
    const out = fs.createWriteStream('src/zip/archive.gz');   
    inp.pipe(gzip).pipe(out);  
};

compress();