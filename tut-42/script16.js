// Kya hai flat()?
// flat() ek JavaScript array method hai jo ek nested array ko flatten karta hai (yaani sub-arrays ko ek single array me merge kar deta hai). Ye method default depth 1 tak flatten karta hai, lekin aap custom depth bhi specify kar sakte ho.

// Agar array aur deeply nested hai, to aap higher depth ya Infinity use kar sakte ho to poore array ko flatten karne ke liye.


// array.flat(depth);


// depth (optional):
//     Kitne levels tak flatten karna hai.
//     Default value: 1
// Returns
//     Ek new flattened array.



const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = arr.flat();

console.log(flattened); // Output: [1, 2, 3, 4, [5, 6]]


// flat() ne sirf ek level tak flatten kiya ([3, 4, [5, 6]] ko [3, 4, [5, 6]] banaya).



const arr1 = [1, 2, [3, 4, [5, 6]]];
const flattened1 = arr1.flat(2);

console.log(flattened1); // Output: [1, 2, 3, 4, 5, 6].



const arr2 = [1, [2, [3, [4, [5]]]]];
const flattened2 = arr2.flat(Infinity);

console.log(flattened2); // Output: [1, 2, 3, 4, 5]