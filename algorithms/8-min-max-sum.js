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

console.log('-- -- -- arr', arr);

}

function main() {
    // const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum([1, 3, 5, 7, 9]);
}

main();
