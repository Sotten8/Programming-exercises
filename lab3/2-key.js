'use strict';

const generateKey = (length, characters) => {
  let i = 1;
  const arr = [];
  while (i <= length) {
      arr.push(characters[Math.floor(Math.random() * characters.length)])
      i++;
  };
  return arr.join('');
};

module.exports = { generateKey };
