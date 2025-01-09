// String.prototype.split() ek method hai jo ek string ko divide karta hai aur ek array return karta hai. Yeh string ko specified delimiter (separator) ke basis par todta hai.

// str.split(separator, limit)

/*
separator (optional):

Yeh wo pattern hai (string ya regular expression) jo string ko todne ke liye use hota hai.
Agar separator specify nahi kiya gaya, to poori string ek single element array ke roop mein return hoti hai.
Agar separator empty string "" hai, to string ke har character ko tod diya jata hai.
limit (optional):

Maximum number of elements jo array mein return honge.
Agar specify nahi kiya, to poora result array return hota hai.
*/

// Ek array jo string ke parts (substrings) ko represent karta hai.

let str = "JavaScript is fun";
let result = str.split(" ");
console.log(result); 
// Output: ["JavaScript", "is", "fun"]


let str1 = "apple,banana,cherry";
let result1 = str1.split(",");
console.log(result1);
// Output: ["apple", "banana", "cherry"]


let str2 = "red,green,blue,yellow";
let result2 = str2.split(",", 2);
console.log(result2); 
// Output: ["red", "green"] (only 2 elements returned due to limit)



let str3 = "Hello";
let result3 = str3.split("");
console.log(result3);
// Output: ["H", "e", "l", "l", "o"] (each character is split)
