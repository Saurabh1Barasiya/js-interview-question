// String.prototype.search() ek method hai jo string ke andar specified substring ya pattern ki first occurrence ka index return karta hai. Yeh method ek regular expression ya simple string ko search karne ke liye use hota hai.


// str.search(searchValue)

// searchValue: Yeh ek regular expression (RegExp) ya string ho sakta hai jise search karna hai.

// Return Value:
// Agar pattern match hota hai, to index of the first match return hota hai.
// Agar pattern match nahi hota, to -1 return hota hai.



let str = "Hello World!";

console.log(str.search("World"));  // Output: 6 (index of 'World')
console.log(str.search("Hi"));     // Output: -1 (not found)


let str1 = "apple banana cherry";

console.log(str1.search(/banana/));  // Output: 6 (index of 'banana')
console.log(str1.search(/grape/));   // Output: -1 (not found)


let str2 = "apple apple apple";
console.log(str2.search("apple"));  // Output: 0 (first occurrence only)

