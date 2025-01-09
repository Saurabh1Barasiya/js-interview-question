// String.prototype.charAt() in JavaScript
// charAt() ek JavaScript method hai jo ek string ka character return karta hai, based on a given index. Yeh purana aur commonly used method hai, lekin negative index support nahi karta.

// string.charAt(index)

/*
index: Ek number jo string ke character position ko specify karta hai. (0-based index)

Return Value:

Agar index valid hai, to us position ka character return karega.
Agar index invalid hai (e.g., string ke length ke bahar), to empty string ("") return karega.

*/



let str = "Saurabh";

console.log(str.charAt(0));  // Output: "S" (first character)
console.log(str.charAt(3));  // Output: "r" (4th character, as index is 0-based)
console.log(str.charAt(6));  // Output: "h" (last character)
console.log(str.charAt(10)); // Output: "" (index is out of range)





let str1 = "Saurabh";

for (let i = 0; i < str1.length; i++) {
  console.log(str1.charAt(i)); // Each character from the string
}

/*
S
a
u
r
a
b
h
*/