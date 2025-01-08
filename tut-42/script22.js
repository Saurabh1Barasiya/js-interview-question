// Agar aapko sirf indexes chahiye array ke elements ke, to keys() ka use karke aap array ke indexes ko iterate kar sakte ho.


// keys() ek JavaScript array method hai jo array ke indexes ki ek iterator object return karta hai. Matlab, agar aap ek array ke saare indexes (keys) chahte ho, to keys() method ka use kar sakte ho.

// Yeh method ek Array Iterator object return karta hai, jisme array ke indexes hote hain, jo aap loop ya iteration ke through access kar sakte ho.


const fruits = ["apple", "banana", "cherry"];
const keys = fruits.keys();

for (let index of keys) {
  console.log(`Index: ${index}`);
}

// Output:
// Index: 0
// Index: 1
// Index: 2

console.log(keys);   //  Object [Array Iterator] {}

// Key Points
// Returns Array Iterator:

// Yeh method array ke indexes ka ek iterator object return karta hai, jisme har index ek key hota hai.
// Not the values:

// Yeh method array ke values nahi, balki indexes (keys) return karta hai.
// Loop ke through access karo:

// Is iterator object ko aap for...of loop ya .next() method ke through access kar sakte ho.


const fruits1 = ["apple", "banana", "cherry"];
const keys1 = fruits1.keys();

for (let key of keys1) {
  console.log(key);
}
// Output:
// 0
// 1
// 2




const fruits2 = ["apple", "banana", "cherry"];
const keys2 = fruits2.keys();

console.log(keys2.next());  // Output: { value: 0, done: false }
console.log(keys2.next());  // Output: { value: 1, done: false }
console.log(keys2.next());  // Output: { value: 2, done: false }
console.log(keys2.next());  // Output: { value: undefined, done: true }
