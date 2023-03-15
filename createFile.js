const fs = require('fs')

const writer = fs.createWriteStream('text.txt')
for (let i = 0; i < 3000000; i++) {
    writer.write(
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n`
    );
}