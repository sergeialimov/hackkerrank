'use strict';


/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  console.log('-- -- -- grades', grades);
  
}

function main() {
  // const gradesCount = parseInt(readLine().trim(), 10);
  const gradesCount = 10;

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
      // const gradesItem = parseInt(readLine().trim(), 10);
      const gradesItem = 2;
      grades.push(gradesItem);
  }

  const result = gradingStudents(grades);
  console.log('-- -- -- ', result);
    
}

main();
