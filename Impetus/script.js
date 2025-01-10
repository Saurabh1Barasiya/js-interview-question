// flatten an array and remove the duplicates.

const inpArr = [ [1,3,7 ], [9, 3, 2], [6,4,3] ];
// outArr = [1,2,3,4,6,7,9];


let arr = inpArr.flat(Infinity);
let mySet = new Set(arr);
arr = [...mySet].sort((a,b)=>a-b);
console.log(arr);

// [1, 2, 3, 4, 6, 7, 9]