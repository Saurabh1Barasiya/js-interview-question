// String.prototype.toUpperCase() ek method hai jo string ke saare lowercase characters ko uppercase mein convert karta hai aur ek nayi string return karta hai. Yeh original string ko modify nahi karta (immutable hota hai).

// str.toUpperCase()

// Ek nayi string jisme saare characters uppercase mein hote hain.

let str = "hello world";
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: "HELLO WORLD"
console.log(str);      // Output: "hello world" (original string remains unchanged)



let str1 = "JavaScript";
let str2 = "javascript";

console.log(str1.toUpperCase() === str2.toUpperCase()); // Output: true




let str3 = "Frontend Developer";
console.log(str.toUpperCase()); // Output: "FRONTEND DEVELOPER"
