#!/usr/bin/node

// Define the function 'callMeMoby'
function callMeMoby (x, theFunction) {
  // Use a 'for' loop to call 'theFunction' 'x' times
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

// Export the function to make it visible from outside
module.exports = { callMeMoby };
