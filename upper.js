const fs = require('fs')


const upper = fs.createWriteStream('upper.txt');
fs.createReadStream('text.txt')
    .on('data', chunk => {
        upper.write(chunk.toString().toLocaleUpperCase());
    })