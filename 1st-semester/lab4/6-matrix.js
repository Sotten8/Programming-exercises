'use strict';

const max = (array) => {
  const newArray = array.flat()
  return Math.max(...newArray);
};

module.exports = { max };
