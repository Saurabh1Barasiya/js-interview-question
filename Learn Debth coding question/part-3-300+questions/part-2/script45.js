const marks = [1,2,3];
const roll = [4,5,6];

console.log([].concat(marks,roll));  // [ 1, 2, 3, 4, 5, 6 ]
console.log([...marks,...roll]);     // [ 1, 2, 3, 4, 5, 6 ]
console.log(marks.concat(roll));     // [ 1, 2, 3, 4, 5, 6 ]

