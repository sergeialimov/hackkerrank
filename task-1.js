const inNum = (string) => Number.isInteger(+string);


const decryptPassword = (pass) => {
  const expectedResult = '43Ah*ck0rr0nk';
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

const main = () => {
  const incomingPass = "hAc"; // "hAck3rr4nk"
  const result = decryptPassword(incomingPass);
  console.log('-- result', result);
}

main();
