'use strict';

const phonebook = [
    { name: 'Kate', phone: '+380502228195' },
    { name: 'Alex', phone: '+380692560911' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};


module.exports = { phonebook, findPhoneByName };
