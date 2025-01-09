// The String.fromCodePoint() method creates a string from a sequence of Unicode code points. It’s similar to String.fromCharCode(), but with added support for Unicode code points outside the Basic Multilingual Plane (BMP) (code points above U+FFFF).

//  String.fromCodePoint(num1, num2, ...);

// Parameters:
//     num1, num2, ...: One or more Unicode code points (integers) to convert into a string.
// Return Value:
//     A string created by combining the given code points.



// String.fromCodePoint() supports code points beyond 0xFFFF, which includes characters like emoji and certain rare symbols.



console.log(String.fromCodePoint(0x1F600)); // Output: "😀" (Grinning Face Emoji)
console.log(String.fromCodePoint(0x1F9E1)); // Output: "🧡" (Orange Heart Emoji)
console.log(String.fromCodePoint(0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466)); 
// Output: "👨‍👩‍👦" (Family: Man, Woman, and Boy)



/*
Why Use String.fromCodePoint()?
    Support for Supplementary Characters: Unicode has over 1 million code points, and many characters like emoji, rare scripts, and symbols are outside the BMP. String.fromCodePoint() can handle these.

Modern Applications: 
    If you’re dealing with emoji or international characters in modern web     applications, String.fromCodePoint() is essential.
*/