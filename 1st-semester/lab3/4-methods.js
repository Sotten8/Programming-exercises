'use strict';

const functions = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

const methods = () => { 
  const array = [];
  for (const keys in functions) {
      if (typeof functions[keys] === 'function') {
          array.push([keys, functions[keys].length]);
      };
  };
  return array;
};

module.exports = { methods }
