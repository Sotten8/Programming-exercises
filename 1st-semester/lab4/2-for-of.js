'use strict';

const sum = (...args) => {
  const len = args.length
  let sum = 0;
  for (const elements of args) sum+= elements;
  return sum;
}

module.exports = { sum };
