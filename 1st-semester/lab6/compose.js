'use strict';

const compose = (...fns) => {
  const handlers = [];
  const created = (x) => {
    if (fns.length === 0) return x;
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return;
    }
  };
  created.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return created;
};

module.exports = { compose };