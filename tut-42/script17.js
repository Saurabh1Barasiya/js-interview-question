// Kya hai flatMap()?
// flatMap() ek JavaScript array method hai jo do cheezein ek sath karta hai:

// Mapping: Har element par ek callback function apply karta hai, aur naya array banata hai.
// Flattening: Resulting array ko ek level tak flatten kar deta hai.
// Ye ek shortcut hai jo map() aur flat(1) ko combine karta hai.

// array.flatMap(callback, thisArg);


// flatMap() hamesha ek level tak flatten karta hai, chahe nested arrays jitne bhi deeply ho.

const arr = [1, 2, 3];
const newArray = arr.flatMap((ele)=>ele*2)
console.log(newArray);     // [ 2, 4, 6 ]


const arr1 = [1, 2, [3, 4]];
const newArray1 = arr.flatMap((ele)=>ele*10);
console.log(newArray1);    // [ 10, 20, 30 ]





const arr2 = [1, 2, 3];

const mapped = arr2.map(x => [x, x * 2]);
console.log(mapped); 
// Output: [[1, 2], [2, 4], [3, 6]]

const flatMapped = arr2.flatMap(x => [x, x * 2]);
console.log(flatMapped); 
// Output: [1, 2, 2, 4, 3, 6]
