#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    // Validate if w and h are positive integers
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Initialize as an empty object if invalid
      this.width = undefined;
      this.height = undefined;
    }
  }

  // Method to print the rectangle using the character 'X'
  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }
}

module.exports = Rectangle;
