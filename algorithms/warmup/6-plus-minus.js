'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  const positve = arr.filter(item => item > 0);
  const negative = arr.filter(item => item < 0);
  const zeros = arr.filter(item => item === 0);
  
  console.log((positve.length/arr.length).toFixed(6));
  console.log((negative.length/arr.length).toFixed(6));
  console.log((zeros.length/arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    // const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const arr = [1, 1, 0, -1, -1];
    plusMinus(arr);
}

main();