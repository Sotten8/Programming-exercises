'use strict'

const pipe = (...fn) => {
    const check = (inter, ext) => {
        if (typeof ext !== 'function') throw new Error('All arguments should be functions') 
        return ext(inter);
    };
    return x => fn.reduce(check, x);
}

module.exports = { pipe }
