'use strict';

const ipToInt = (ip) => {
  const left = (res, el) => (res << 8) + parseInt(el);
  const newIp = ip.split('.').reduce(left, 0);
  return newIp;
};

module.exports = { ipToInt };
