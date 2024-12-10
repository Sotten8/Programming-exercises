'use strict';

const unique = (array) => {
    const newArray = [];
    for (const element of array) {
        if (!newArray.includes(element)) newArray.push(element)
    }
    return newArray;
}

module.exports = { unique };
