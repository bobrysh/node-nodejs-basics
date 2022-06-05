import * as fs from 'fs';
import * as path from 'path';


export const copy = async (source,destination) => {
  let alreadyExist = fs.existsSync(source);
  let stats = alreadyExist && fs.statSync(source);
  let isDirectoryExist = alreadyExist && stats.isDirectory();
  if (isDirectoryExist) {
      fs.mkdirSync(destination);
      fs.readdirSync(source).forEach(function(childItemName) {
        copy(path.join(source, childItemName),path.join(destination, childItemName));
      });
  } else {
      fs.copyFileSync(source, destination);
  }
};

console.log(copy('src/fs/files','src/fs/files_copy'));