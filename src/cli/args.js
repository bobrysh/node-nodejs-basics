export const parseArgs = () => {
    let string = [];
    const inputArgs = process.argv.slice(2, process.argv.length);
    inputArgs.forEach((arg, index) => {
      if (arg.slice(0, 2).includes('--')) {
        const longArgKey = arg.slice(2, arg.length);
        const longArgValue = inputArgs[index + 1]; 
        string[index] = `${longArgKey} is ${longArgValue}`
      }
    });
    console.log(string.join('\n'));
};

parseArgs()
