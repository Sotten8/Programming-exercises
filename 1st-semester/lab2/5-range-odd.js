'use strict';

const rangeOdd = (i, n) => {
    let array = [];
    while (i<=n) {
        if (i%2!=0) array.push(i);
        i++;
    };
    return array;
};

module.exports = { rangeOdd };
