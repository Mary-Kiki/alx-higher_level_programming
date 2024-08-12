#!/usr/bin/node
// Print using x for loop

const number = process.argv[2];
const count = parseInt(number, 10);

if (isNaN(count)) {
  console.log('Missing number of occurrences');
} else {
  for (let x = 0; x < count; x++) {
    console.log('C is fun');
  }
}
