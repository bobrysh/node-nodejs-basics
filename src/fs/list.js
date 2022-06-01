import * as fs from 'fs';


export const list = async (folder) => {
    fs.readdir(folder, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
        if (err) console.log("FS operation failed",err)
    });
};

console.log(list('src/fs/files'));
