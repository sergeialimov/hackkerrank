'use strict';


/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  const handleGrade = (num) => {
    let tmp = num;

    if (tmp < 38) {
      return tmp;
    }

    const remainder = tmp % 5;

    if (remainder > 2) {
      tmp += 5- remainder;
      return tmp;
    }
    return tmp;
  }
  let res = [];
  grades.forEach(grade => {
    res.push(handleGrade(grade));
  });
  return res;
}

function main() {
  const grades = [73, 67, 38, 33];
  const result = gradingStudents(grades);
  console.log('-- -- -- ', result);
    
}

main();
