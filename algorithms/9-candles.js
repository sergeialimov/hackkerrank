'use strict';

const fs = require('fs');


/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  if (!candles || candles.length === 0) {
    return 0;
  }
  const tmp = [...candles];
  const candle = Math.max(...tmp);
  const candlesNum = tmp.filter((x) => x === candle);
  return candlesNum.length;
}

function main() {
  const candles = [1000, 1000, 1000];
  const result = birthdayCakeCandles(candles);
  console.log('-- -- -- ', result);
}

main();
