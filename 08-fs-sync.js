const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

console.log(first);

writeFileSync(  './content/result-sync.txt',
                `\nResult Appended: ${first}`, { flag: 'a'})