// Kya hai Array.copyWithin()?
// Array.copyWithin() ek JavaScript ka built-in method hai jo ek array ke elements ko usi array ke andar copy karta hai, bina array ki length ko badle.

// Ye original array ko modify karta hai aur array ka ek naya version return nahi karta.



// array.copyWithin(target, start, end);

// target: Wo index jaha se nayi values copy karna start karni hain.
// start: (Optional) Wo index jaha se elements copy karna shuru hoga. Default: 0.
// end: (Optional) Wo index jaha tak elements copy karenge (exclusive). Default: array.length.


// Key Points
// copyWithin() existing elements ko overwrite karta hai.
// Ye shallow copy karta hai, aur nested arrays ya objects ko reference ke through copy karta hai.
// Mutates the original array (iska matlab hai original array change hoga).

const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);

console.log(arr);  //  [4, 5, 3, 4 ,5]



const arr1 = [10, 20, 30, 40, 50];
arr1.copyWithin(1, 3, 5);
console.log(arr1);   // [10, 40, 50, 40, 50]




const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(-2, -4, -3);

console.log(arr2);
// Output: [1, 2, 3, 2, 5]



// Self-Copy: Array ke andar hi copy karta hai, doosre array ki zarurat nahi.
// Mutates Original Array: copyWithin() array ko directly modify karta hai.
// Shallow Copy: Nested objects ya arrays ka sirf reference copy hota hai.



// Reordering Elements
// Kisi array ke elements ka order change karna:

const arr3 = ['a', 'b', 'c', 'd', 'e'];
arr3.copyWithin(1, 3);

console.log(arr3);   //  ['a','d','e','d', 'e']