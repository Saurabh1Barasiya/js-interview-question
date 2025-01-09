// String.prototype.repeat()

// ek method hai jo ek string ko specified number of times repeat karta hai aur ek nayi string return karta hai.

// str.repeat(count)

// count: Yeh ek integer value hai jo batata hai kitni baar string ko repeat karna hai. Agar count 0 ya usse kam ho, to ek empty string return hoti hai.


// Yeh method ek nayi string return karta hai jisme original string repeat ki gayi hoti hai specified number of times.


let str = "abc";

console.log(str.repeat(3));  // "abcabcabc" (string is repeated 3 times)

console.log(str.repeat(0));  // "" (empty string)

console.log(str.repeat(5));  // "abcabcabcabcabc" (string is repeated 5 times)



// let str1 = "Hi";
// console.log(str1.repeat(-1));  // error   negative are not allowed.



