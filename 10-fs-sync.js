// const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
//read
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')