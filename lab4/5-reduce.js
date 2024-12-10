'use strict';

'use strict'

const sum = (...args) => args.reduce((res, el) => res += el,0);   

module.exports = { sum };
