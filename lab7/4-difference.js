'use strict';

const difference = (array1, array2) => {
    const diff = [];
    for (const element of array1) {
        if (!array2.includes(element)) diff.push(element);
    }
    return diff;
}

module.exports = { difference };
