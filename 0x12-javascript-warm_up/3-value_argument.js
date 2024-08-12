#!/usr/bin/node
// Print first argument of script

const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
