// convert a set into array.

const mySet = new Set([1,2,3]);
const way1 =  [...mySet];
const way2 =  Array.from(mySet);
const way3 =  new Array(...mySet);

console.log(way1);   // [ 1, 2, 3 ]
console.log(way2);   // [ 1, 2, 3 ]
console.log(way3);   // [ 1, 2, 3 ]