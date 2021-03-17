'use strict';

const fs = require('fs');


/*
 * Complete the timeConversion function below.
 */


function timeConversion(s) {
  const daytime = s.slice(-2);

  const tmp = s.slice(0, -2).split(':');

  const makeHours = (str) => {
    let hours = Number.parseInt(str);
    if (daytime === 'PM') {
      hours += 12;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (hours === 24) {
      hours = '12';
    }
    if (daytime === 'AM' && hours === 12) {
      hours = `00`;
    }
    return hours;
  }

  return `${makeHours(tmp[0])}:${tmp[1]}:${tmp[2]}`;
  
}

function main() {
  // const s = '07:05:45AM';
  const s = '12:01:45PM';
  let result = timeConversion(s);
  console.log('-- -- -- ', result);

}

main();