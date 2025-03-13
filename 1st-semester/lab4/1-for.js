'use strict';

const sum = (...args) => {
  const len = args.length
  let sum = 0;
  for (let i = 0; i < len; i++) sum += args[i];
  return sum;
};

module.exports = { sum };