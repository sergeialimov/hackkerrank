const isNum = (string) => Number.isInteger(+string);
const isLow = (string) => string === string.toLowerCase() && ! isNum(string);
const isUp = (string) => (string === string.toUpperCase() && ! isNum(string));


const decryptPassword = (pass) => {
  const expectedResult = '43Ah*ck 0rr0nk';
  let newPass = '';

  for (let i = 0; i < pass.length; i++) {
    let strI = pass[i];
    let strI1 = pass[i+1];
    if (isNum(pass[i])) {
      newPass = newPass.concat('0');
    }
    if (i < pass.length - 1) {
      if (isLow(pass[i]) && isUp(pass[i + 1])) {
        newPass = newPass.concat(pass[i + 1], pass[i], '*');
        i++;
      } else {
        newPass = newPass.concat(pass[i]);
      }
    } else {
      newPass = newPass.concat(pass[i]);
    }
  }
  return newPass;
}

const main = () => {
  const incomingPass = "hAck3"; // "hAck3rr4nk"
  const expectedResult = '43Ah*ck 0rr0nk';
  const result = decryptPassword(incomingPass);
  console.log('-- result', result);
}

main();
