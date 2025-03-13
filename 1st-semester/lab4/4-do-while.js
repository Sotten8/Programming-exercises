'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let sum = 0;
  do {
    sum += args.shift();
  } while (args.length > 0);
  return sum;
}

module.exports = { sum };
