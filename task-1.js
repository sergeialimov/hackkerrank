const { log } = require('console');
const fs = require('fs');


function decryptPassword(str) {
  let newPass = '';
  for (let i = 0; i < str.length; i++) {
      if (i < str.length - 1) {
        if (str[i] === str[i].toLowerCase() && str[i + 1] === str[i + 1].toUpperCase()) {
          newPass = newPass.concat(str[i + 1], str[i], '*');
        }
        
        if (Number.isInteger(+str[i])) {
          console.log('-- -- -- s[i]', str[i]);
          
          newPass = newPass.concat('0');
        }
        console.log('-- -- -- newPass', newPass);
      }
  }
  return newPass;
}
function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
  const s = "hAc";
  // const s = "hAck3rr4nk";
  console.log('start', s);

  const result = decryptPassword(s);
  console.log('result', result);

  // ws.write(result + '\n');

  // ws.end();
}

main();
