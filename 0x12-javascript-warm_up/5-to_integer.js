#!/usr/bin/node
// Prints the first arg to number

const firstArg = process.argv[2];
const converted = parseInt(firstArg, 10);

if (isNaN(converted)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${converted}`);
}
