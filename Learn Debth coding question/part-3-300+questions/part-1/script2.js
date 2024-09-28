// flate an array.


// flat() always return a new array.

let arr = [1,[2,3],[4,5,[6,7,8,[10],[20]]]];
const oneLevelFlate = arr.flat()
console.log(oneLevelFlate);  // [ 1, 2, 3, 4, 5, [ 6, 7, 8, [ 10 ], [ 20 ] ] ].


// but i want full flaten.
const fullFlate = arr.flat(Infinity);
console.log(fullFlate);  //  [1, 2, 3,  4,  5, 6, 7, 8, 10, 20 ].
