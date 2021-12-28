const fs = require('fs');
const readline = require('readline');


const containsRotation = (arr, val) => {
    
    return arr.find(line => (line + line).includes(val));
}

async function processLineByLine() {
    const arr = fs.readFileSync('./src/scripts/binary.txt').toString().split("\r\n");
    const fileStream = fs.createReadStream('./src/scripts/binary.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        if (!containsRotation(arr, line.trim())) {
            fs.writeFileSync('./src/scripts/filtered.txt', content + '\n', { flag: 'a+' }, err => { })
        }
    }
}

processLineByLine();
