#!/usr/bin/node

function secondBiggest (numbers) {
  if (numbers.length < 2) return 0; // Not enough numbers for second biggest

  let largest = -Infinity;
  let second = -Infinity;

  for (const num of numbers) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }

  return second === -Infinity ? 0 : second;
}

const args = process.argv.slice(2).map(arg => parseInt(arg, 10)); // Get and convert arguments
console.log(secondBiggest(args));
