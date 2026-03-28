const arr = Array.from({length:5});
console.log(arr);   // [ undefined, undefined, undefined, undefined, undefined ]

const arrWithValue = Array.from({length:5},(_,i)=>i+1);
console.log(arrWithValue);   // [ 1, 2, 3, 4, 5 ]