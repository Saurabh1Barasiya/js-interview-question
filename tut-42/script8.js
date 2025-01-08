// Kya hai Array.prototype.entries()?
// entries() ek JavaScript ka built-in method hai jo ek iterator object return karta hai. Ye iterator array ke har index ke liye ek key-value pair generate karta hai.

// Key: Index (position of element in array).
// Value: Array ka element.

// array.entries();
// Ye koi argument accept nahi karta.

// Return Value
// Ek Array Iterator Object return karta hai.
// Is object ko hum loop (e.g., for...of) ya next() method ke through traverse kar sakte hain.

const fruits = ["apple", "banana", "cherry"];
const iterator = fruits.entries();
console.log(iterator);  //        Object [Array Iterator] {}
console.log(iterator.next().value);    //  [ 0, 'apple' ]
console.log(iterator.next().value);    //  [ 1, 'banana' ]
console.log(iterator.next().value);    //  [ 2, 'cherry' ]




const colors = ["red", "green", "blue"];
const iterator1 = colors.entries();

for (const [index, value] of iterator1) {
  console.log(`Index: ${index}, Value: ${value}`);
}

// Output:
// Index: 0, Value: red
// Index: 1, Value: green
// Index: 2, Value: blue




// 3. With Array.from()
// Agar tum iterator ko ek proper array me convert karna chahte ho:

const numbers = [10, 20, 30];
const iterator2 = numbers.entries();

console.log(Array.from(iterator2));  //    [ [ 0, 10 ], [ 1, 20 ], [ 2, 30 ] ]





//  Combining with Destructuring

const languages = ["JavaScript", "Python", "C++"];

for (const [index, lang] of languages.entries()) {
  console.log(`Language at index ${index} is ${lang}`);
}


// Language at index 0 is JavaScript
// Language at index 1 is Python
// Language at index 2 is C++







