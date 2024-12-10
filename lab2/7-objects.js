'use strict';

const fn = () => {
    const user1 = { name: 'Stanislav' };
    let user2 = { name: 'Oleksandr' };

    user1.name = "Oleksii";
    user2.name = "Mariia";

    //user1 = { name: 'Stanislav Oleksiichuk' }
    user2 = { name: 'Stanislav Oleksiichuk' };

    return { user1, user2 };
}

module.exports = { fn };
