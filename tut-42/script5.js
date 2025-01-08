// Kya hai Array.at()?
// Array.at() ek JavaScript ka built-in method hai, jo kisi array ka specific index par value return karta hai.
// Iska unique feature yeh hai ki tum negative index bhi use kar sakte ho, jo array ke end se count karta hai.


// array.at(index);

// array: Array jispe method lagana hai.
// index: Wo position (positive ya negative) jaha ka element tumhe chahiye.

// Features
// Positive index: Start se element fetch karta hai.
// Negative index: End se element fetch karta hai (reverse counting).


const fruits = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits.at(1)); 
// Output: 'banana' (index 1 ka element)


console.log(fruits.at(-1));   // orange.



const numbers = [10, 20, 30];
console.log(numbers.at(5)); 
// Output: undefined (kyunki index 5 exist nahi karta)

console.log(numbers.at(-5)); 
// Output: undefined (kyunki -5 index nahi hai)



