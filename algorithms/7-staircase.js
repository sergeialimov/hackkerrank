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

// Complete the staircase function below.
function staircase(n) {
  console.log('-- -- -- start');

  // loop by lines
  for (let i = 1; i < n; i++) {

    // adding spaces
    let spaces = '';
    for (let m = 0; m < n-i; m++) {
      spaces = `${spaces}-`
    }
    console.log(spaces);
    
    // adding symbomls
    // let symbols = '';
    // for (let k = n; k < n-i; k++) {
    //   symbols = `${symbols}-`
    // }
    // console.log('#', );
  }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(6);
}


main();