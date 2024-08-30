#!/usr/bin/node
let count = 0; // Initialize a counter variable

exports.logMe = function (item) {
  console.log(`${count}: ${item}`); // Print the current count and item
  count++; // Increment the counter
};
