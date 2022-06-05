import { stdin, stdout } from 'process';

export const transform = async () => {
  const transformedText = (text) => text.split('').reverse().join('');
  stdin.on('data', (data) => stdout.write(transformedText(data.toString())));
  
  process.on(err, () => {
    if (err) process.exit(0), console.log("FS operation failed",err)
  });
};

transform();