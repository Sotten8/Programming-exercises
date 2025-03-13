"use strict"

//1st Task
const arrayNumber1 = ['Stas', 17, false, true, -20, 0, NaN, false, 'right', 123, 'go']
const hashNumber1 = { number: 0, string: 0, boolean: 0 }
const task1 = () => {
    for (const element of arrayNumber1) {
        hashNumber1[typeof element] += 1
    }
}
task1()
console.dir(hashNumber1)

//2nd task
const arrayNumber2 = [
    'Oleksiichuk',
    20,
    3,
    true,
    'boolean',
    null,
    false,
    'false',
    NaN,
    undefined,
    'university',
    {
        a: 'b',
        c: 'd',
        e: 23
    },
    [1,2,3],
    'monster',
    'freedom',
    {
        data: {
            city: 'something',
            number: 123456789
        }
    },
    12,
    false,
    -100,
    true,
    NaN,
    null
]
const hashNumber2 = {}
const task2 = () => {
    for (const element of arrayNumber2) {
        if (hashNumber2[typeof element]) {
            hashNumber2[typeof element] += 1;
        }
        else {
            hashNumber2[typeof element] = 1;
            }
    }
}
task2()
console.dir(hashNumber2)