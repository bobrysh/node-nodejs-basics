import * as fs from 'fs';

export const rename = async (source,destination) => {
    fs.rename(source, destination, (err) => {
        if (err) console.log("FS operation failed",err)
    })
};

console.log(rename('src/fs/files_copy/properFilename.txt','src/fs/files_copy/properFilename.md'));