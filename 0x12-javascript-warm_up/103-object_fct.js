#!/usr/bin/node

// Define the object with an initial value
const myObject = {
  type: 'object',
  value: 12,

  // Add the 'incr' method to increment 'value'
  incr: function () {
    this.value += 1;
  }
};

console.log(myObject);

// Use the 'incr' method and print the object
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
