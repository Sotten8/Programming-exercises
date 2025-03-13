'use strict';

const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x ** 3;

const calculate = () => {
    const n = 9;
    const array = [];
    for (let i = 0; i <= n; i++) {
      const avg = average(square(i),cube(i));
      array.push(avg)
    };
    return array;
};

module.exports = { average, square, cube, calculate};
