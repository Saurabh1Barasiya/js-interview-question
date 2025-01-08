// Kya hai includes()?
// includes() ek JavaScript array method hai jo yeh check karta hai ki koi particular value array ke andar hai ya nahi. Agar value array me milti hai, to yeh true return karta hai; agar nahi milti, to false return karta hai.


// array.includes(valueToFind, fromIndex);

// Parameters
// valueToFind:

// Jo value array me dhoondhni hai.
// fromIndex (optional):

// Kis index se search start karni hai (default: 0).
// Negative value ka matlab hota hai array ke end se count karna.



const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false



const fruits1 = ["Apple", "Banana", "Cherry"];

console.log(fruits1.includes("apple")); // false
console.log(fruits1.includes("Apple")); // true




const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3, 2)); // true (search starts at index 2)
console.log(numbers.includes(3, 3)); // false (search starts at index 3)
console.log(numbers.includes(3, -3)); // true (search starts 3 positions from the end)




const arr = [1, 2, NaN, 4];

console.log(arr.includes(NaN)); // true
