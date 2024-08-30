#!/usr/bin/node
exports.esrever = function (list) {
  // Create an empty array to hold the reversed list
  const reversedList = [];

  // Iterate over the list from the end to the beginning
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return reversedList;
};
