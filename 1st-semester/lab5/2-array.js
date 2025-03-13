'use strict'

class newArray {
    constructor () {
        this.data = [];
    }
    get = (i) => this.data[i];
    push = (el) => this.data.push(el);
    pop = () => this.data.pop();
}

module.exports = { newArray }