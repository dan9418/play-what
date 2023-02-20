const fs = require('fs')

// Function to print the output
function printTheArray(arr, n) {
    let content = '';
    for (let i = 0; i < n; i++) {
        content = content + arr[i];
    }
    if (content[0] === '0') return;
    const numOnes = (content.match(/1/g) || []).length;
    if (numOnes === 0 || numOnes === 1 || numOnes === 2 || numOnes === n) return;
    fs.writeFileSync(`./src/scripts/binary-${numOnes}.txt`, content + '\n', { flag: 'a+' }, err => { })
}

// Function to generate all binary strings
function generateAllBinaryStrings(n, arr, i) {
    if (i == n) {
        printTheArray(arr, n);
        return;
    }

    // First assign "0" at ith position
    // and try for all other permutations
    // for remaining positions
    arr[i] = 0;
    generateAllBinaryStrings(n, arr, i + 1);

    // And then assign "1" at ith position
    // and try for all other permutations
    // for remaining positions
    arr[i] = 1;
    generateAllBinaryStrings(n, arr, i + 1);
}

let n = 12;

let arr = new Array(n);
arr.fill(0);

// Print all binary strings
generateAllBinaryStrings(n, arr, 0);
