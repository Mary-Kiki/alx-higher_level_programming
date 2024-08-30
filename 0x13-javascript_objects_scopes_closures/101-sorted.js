#!/usr/bin/node
const { dict } = require('./101-data');

const occurrences = {};

for (const [userId, count] of Object.entries(dict)) {
  if (!occurrences[count]) {
    occurrences[count] = [];
  }
  occurrences[count].push(userId);
}

console.log(occurrences);
