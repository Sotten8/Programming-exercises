'use strict';

const removeElement = (array, item) => {
    const pos = array.indexOf(item)
    if (pos != -1) array.splice(pos, 1);
}

module.exports = { removeElement };
