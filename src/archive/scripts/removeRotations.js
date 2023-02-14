const fs = require('fs');
const readline = require('readline');

const containsRotation = (arr, val) => {
    const ret = arr.find(line => {
        if (line === val) return false;
        const doubleLine = `${line + line}`;
        //const doubleVal = `${(val + val)}`;
        const result = doubleLine.includes(val);
        //console.log(doubleLine, doubleVal, result);
        return result;
    });
    //console.log('ret', ret);
    return ret;
}

async function processLineByLine() {
    const arr = fs.readFileSync('./src/scripts/binary.txt').toString().split(/\r?\n/g);
    const filtered = [];

    for (let i = 0; i < arr.length; i++) {
        const line = arr[i];
        if (!containsRotation(filtered, line)) {
            filtered.push(line);
        }
    }

    fs.writeFileSync('./src/scripts/filtered.txt', filtered.join('\n'), { flag: 'a+' }, err => { })
}

processLineByLine();
