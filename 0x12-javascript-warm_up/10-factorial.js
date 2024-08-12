#!/usr/bin/node

function factorial (n) {
  if (n < 0) return 1; // Handle negative numbers by returning 1
  if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
  return n * factorial(n - 1); // Recursive case
}

const arg = parseInt(process.argv[2], 10); // Convert the argument to an integer

if (isNaN(arg)) {
  console.log('1'); // Factorial of NaN is 1
} else {
  console.log(factorial(arg)); // Print the factorial
}
