const { log } = require('console');
const fs = require('fs');

const inNum = (string) => Number.isInteger(+string);


function decryptPassword(pass) {
  let newPass = '';
  for (let i = 0; i < pass.length; i++) {
    let strI = pass[i];
    let strI1 = pass[i+1];
    if (i < pass.length - 1) {
      if (pass[i] === pass[i].toLowerCase() && pass[i + 1] === pass[i + 1].toUpperCase()) {
        newPass = newPass.concat(pass[i + 1], pass[i], '*');
      }
      if (inNum(pass[i])) {
        newPass = newPass.concat('0');
      }
    }
  }
  return newPass;
}
function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
  const incomingPass = "hAc";
  // const s = "hAck3rr4nk";
  console.log('start', incomingPass);

  const result = decryptPassword(incomingPass);
  console.log('result', result);

  // ws.write(result + '\n');

  // ws.end();
}

main();
