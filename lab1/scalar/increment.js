"use strict"

// 1st variant
function inc1(num) {
    return ++num
}

const a = 5
const b = inc1(a)

console.dir({a,b})

//2nd variant
function inc2(num) {
    return ++num.n
}
const obj = {
    n: 5
}
inc2(obj)
console.dir(obj)