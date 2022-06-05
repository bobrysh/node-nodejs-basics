import * as fs from 'fs';

export const read = async (fileToRead) => {
    try {  
        var data = fs.readFile(fileToRead, 'utf8');
        console.log(data.toString());    
    } catch(e) {
        if (e) console.log("FS operation failed",e)
    }
};

console.log(read('src/fs/files/fileToRead.txt'));
