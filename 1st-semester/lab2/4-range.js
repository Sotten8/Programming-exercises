'use strict';

const range = (i, n) => {
    let array = [];
    while (i<=n) {
        array.push(i);
        i++;
    };
    return array;
};
module.exports = { range };
