import * as fs from 'fs';

export const remove = async (source) => {
    fs.unlink(source, (err) => {
        if (err) console.log("FS operation failed",err)
    })
};

console.log(remove('src/fs/files_copy/fileToRemove.txt'));
