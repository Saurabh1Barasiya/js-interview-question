// lets learn about shift and unshift operation in a array.

let array = [1,2,3,4,5];

console.log(array); // [ 1, 2, 3, 4, 5 ]

// so what is shift() in a array.

// Removes the first element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
let deleteValue = array.shift();
console.log(deleteValue); // 1
console.log(array);       // [ 2, 3, 4, 5 ].


// if array is empty in that case it will return undefined.

let emptyArray = [];
let retVal = emptyArray.shift();
console.log(retVal);  // undefined.




