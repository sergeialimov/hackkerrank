'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // counting the first diagonal
  let sum = 0;
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    for (n; n < subArr.length; n++) {
      let tmp = subArr[n];
      sum += tmp;
      n++;
      break;
    }
  }

  // counting the second diagonal
  let sum2 = 0;
  let m = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const subArr = arr[i];
    for (m; m < subArr.length; m++) {
      let tmp = subArr[m];
      sum2 += tmp;
      m++;
      break;
    }
  }

  return Math.abs(sum - sum2);
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // let arr = Array(n);

    // for (let i = 0; i < n; i++) {
    //     arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // }
    const arr1 = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 9, 8, 9 ]];
    const result = diagonalDifference(arr1);
    console.log('-- -- -- result', result);

    // ws.write(result + '\n');

    // ws.end();
}

main();
