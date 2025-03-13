'use strict';

const phonebook = {
    'Stanislav Oleksiichuk': '+380988767370',
    'Bill Gates': '+178314609248',
    'Oleksii Piddubnyi': '+380437320963',
    'Mariia Honcharova': '+380502228195',
    'Oleksandr Virnyi': '+380692560911',
}

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };