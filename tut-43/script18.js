// String.prototype.slice() ek method hai jo ek string ke specified portion ko extract karta hai aur ek nayi string return karta hai bina original string ko modify kiye. Yeh start aur end indexes ke basis par kaam karta hai.

// str.slice(startIndex, endIndex)

/*
startIndex: Yeh index hai jahan se slicing start hogi (inclusive).
endIndex (optional): Yeh index hai jahan slicing end hogi (exclusive). Agar yeh specify nahi kiya gaya, to slicing string ke end tak chalegi.
*/


// Return Value:
// Ek nayi string jo specified portion ko represent karti hai.


let str = "Hello, World!";
console.log(str.slice(0, 5));  // Output: "Hello" (characters from index 0 to 4)
console.log(str.slice(7, 12)); // Output: "World" (characters from index 7 to 11)


let str1 = "JavaScript";
console.log(str1.slice(4));  // Output: "Script" (from index 4 to the end)


let str2 = "Angular Framework";
console.log(str2.slice(-9));      // Output: "Framework" (last 9 characters)
console.log(str2.slice(-9, -5));  // Output: "Frame" (from -9 to -5)



let str3 = "Hello";
console.log(str3.slice(0, 10));  // Output: "Hello" (endIndex > length, returns full string)
console.log(str3.slice(10, 15)); // Output: "" (startIndex > length, returns empty string)
