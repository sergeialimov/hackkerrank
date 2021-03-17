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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const unsortedArr = [...arr];
  unsortedArr.sort((a, b) => a - b);
  const min = [...unsortedArr];
  const max = [...unsortedArr];
  min.pop();
  max.shift();
  const reducer = (acc, item) => acc + item;
  console.log(min.reduce(reducer), max.reduce(reducer));
}

function main() {
    // const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum([3, 1, 5, 7, 9]);
}

main();
process.exit();
