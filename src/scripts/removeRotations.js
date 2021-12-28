const fs = require('fs');
const readline = require('readline');


const containsRotation = (arr, val) => {
    const ret = arr.find(line => {
        const doubleLine = `${(line + line)}`;
        const doubleVal = `${(val + val)}`;
        const result = doubleLine.includes(val) && doubleLine !== doubleVal;
        //console.log(doubleLine, doubleVal, result);
        return result;
    });
    //console.log('ret', ret);
}

async function processLineByLine() {
    const arr = fs.readFileSync('./src/scripts/binary.txt').toString().split(/\r?\n/g);
    console.log(arr.length)

    const fileStream = fs.createReadStream('./src/scripts/binary.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        if (!containsRotation(arr, line.trim())) {
            //console.log('write');
            fs.writeFileSync('./src/scripts/filtered.txt', line + '\n', { flag: 'a+' }, err => { })
        }
    }
}

processLineByLine();
