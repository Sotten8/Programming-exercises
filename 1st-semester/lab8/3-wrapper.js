'use strict';

const contract = (fn, ...types) => (...args) => {
    for (const element of args) {
        const el = types[args.indexOf(element)];
        const type = el.name.toLowerCase();
        if (typeof element !== type) {
            throw new Error (`Argument should have the ${type} type`)
        }
    }
    const res = fn(...args);
    const el = types.pop();
    const type = el.name.toLowerCase();
    if (typeof res !== type) {
        throw new Error (`Result should have the ${type} type`)
    }
    return res;
};

module.exports = { contract };