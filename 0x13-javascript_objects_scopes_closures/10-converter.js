#!/usr/bin/node
exports.converter = function (base) {
  // Return a function that performs the base conversion
  return function (number) {
    return (number === 0
      ? '0'
      : (function convert (n) {
          return n > 0 ? convert(Math.floor(n / base)) + '0123456789abcdef'[n % base] : '';
        })(number));
  };
};
