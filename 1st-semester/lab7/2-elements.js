'use strict';

const removeElements = (array, ...items) => {
  const fn = (item) => {
      const pos = array.indexOf(item)
      if (pos != -1) array.splice(pos, 1);
  }
  items.forEach(fn);
}

module.exports = { removeElements };
