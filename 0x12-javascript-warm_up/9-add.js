#!/usr/bin/node
// Print sum using function

function add (a, b) {
  return a + b;
}

const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[3]);

if (isNaN(firstNum) || isNaN(secondNum)) {
  console.log('NaN');
} else {
  console.log(add(firstNum, secondNum));
}
