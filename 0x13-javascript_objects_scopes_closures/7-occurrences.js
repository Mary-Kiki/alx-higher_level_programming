#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  // Use the filter method to find all occurrences of searchElement
  return list.filter(element => element === searchElement).length;
};
