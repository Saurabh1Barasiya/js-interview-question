// 5 ways to create object.

// 1.
const obj = {}


// 2.
const obj2 = new Object();

// 3.
const obj3 = Object.assign({},{});
console.log(obj3)

// 4.
const obj4 = Object.create({});

// 5.
function test(){}
const obj5 = new test();

console.log({obj,obj2,obj3,obj4,obj5});