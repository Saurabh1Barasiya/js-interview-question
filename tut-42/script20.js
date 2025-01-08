// indexOf() ek JavaScript array method hai jo array me kisi particular element ka index (position) return karta hai. Agar wo element array me nahi milta, to yeh -1 return karta hai.

// array.indexOf(searchElement, fromIndex);


// Parameters:
// searchElement:

// Wo element jo aap array me dhoondhna chahte ho.
// fromIndex (optional):

// Search kis index se karni hai (default value 0 hoti hai).
// Agar aap -1 ya negative number dete ho, to search array ke end se hoti hai.




const fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.indexOf("banana")); // Output: 1 (pehla match)
console.log(fruits.indexOf("grape"));  // Output: -1 (nahi mila)



const fruits1 = ["Apple", "Banana", "Cherry"];

console.log(fruits1.indexOf("apple")); // Output: -1 (case mismatch)
console.log(fruits1.indexOf("Apple")); // Output: 0



const numbers = [1, 2, 3, 4, 5, 2];

console.log(numbers.indexOf(2));      // Output: 1 (pehla match)
console.log(numbers.indexOf(2, 2));   // Output: 5 (index 2 se search start hui)
console.log(numbers.indexOf(2, -3));  // Output: 5 (end se 3 steps back se start hui search)
