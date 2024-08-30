#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    // Check if w and h are positive integers
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    }
    // If validation fails, width and height are not set
  }
}

module.exports = Rectangle;
