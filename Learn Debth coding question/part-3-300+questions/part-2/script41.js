// insert element at first index.
let arr = ["A","B","C"];
arr.unshift("X");

console.log(arr);   // [ 'x', 'A', 'B', 'C' ]


// 0 index se 0 element delete kero or usi index par new value insert kero.
arr.splice(0,0,'X+');
console.log(arr);   // [ 'X+', 'x', 'A', 'B', 'C' ]

arr = ["X++",...arr]
console.log(arr);   // [ 'X++', 'X+', 'X', 'A', 'B', 'C' ]
