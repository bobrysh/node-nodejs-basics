import * as fs from 'fs';


export const create = async () => {
  await fs.stat("src/fs/files/fresh.txt", function(err) {
    if (err) {
      fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young');
    } else {
        console.error("FS operation failed");
    }
});
};


console.log(create())