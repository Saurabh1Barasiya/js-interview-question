// give me unique elements with sorting.

const inpArr = [ [1,3,7 ], [9, 3, 2], [6,4,3] ];

const flattenArray = inpArr.flat(Infinity);
// console.log(flattenArray);  // [ 1, 3, 7, 9, 3, 2, 6, 4, 3]

const uniqueEl = new Set(flattenArray);
// console.log(uniqueEl)  // Set(7) { 1, 3, 7, 9, 2, 6, 4 }

const sortedArray = [...uniqueEl].sort((a,b)=>a-b);
console.log(sortedArray);  // [ 1, 2, 3, 4, 6, 7, 9]
