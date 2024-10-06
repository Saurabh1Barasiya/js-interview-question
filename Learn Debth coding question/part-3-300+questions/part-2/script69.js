const x = {};
x.__proto__.h1 = 10;
console.log(x.h1,x);   // 10 {}

Object.prototype.h1 = ++x.h1;
console.log(x.h1,x); //   10 { h1: 11 }

console.log(x.h1 + Object.keys(x).length); // 12



// diffrence between __proto__ and protype