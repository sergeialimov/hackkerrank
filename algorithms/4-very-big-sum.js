'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  console.log('-- -- -- ar', ar);
  let res = 0;
  ar.forEach(element => {
      res+=element
    });
  console.log('-- -- -- res', res);
  
  return res;
}

function main() {
  console.log('-- -- -- 1', );
  const input = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const arCount = parseInt(readLine(), 10);

    // const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(input);

    // ws.write(result + "\n");

    // ws.end();
}

main();