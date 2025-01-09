// String.prototype.startsWith() ek method hai jo check karta hai ki ek string specified substring se start ho rahi hai ya nahi. Agar string specified substring se start hoti hai, to yeh true return karta hai, nahi to false.

// str.startsWith(searchString, position)


/*
Parameters:
    searchString (required):
    Wo substring jo check karna hai ki string ke starting mein hai ya nahi.
position (optional):
    String ke kis position se check karna hai. Default value 0 hai (start of the string).
*/


/*
    Return Value:
        true: Agar string specified substring se start hoti hai.
        false: Agar string specified substring se start nahi hoti.
*/


let str = "Hello, World!";
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("World")); // Output: false




let str2 = "JavaScript is awesome!";
console.log(str2.startsWith("Script", 4));  // Output: true (starts from index 4)
console.log(str2.startsWith("Java", 4));    // Output: false




let str3 = "Frontend Developer";
console.log(str3.startsWith("frontend"));  // Output: false (case-sensitive)
console.log(str3.startsWith("Frontend"));  // Output: true


let str4 = "$100 is the price";
console.log(str4.startsWith("$"));  // Output: true


// Agar searchString empty hai (""), to startsWith() hamesha true return karega.
let str5 = "Angular";
console.log(str.startsWith(""));  // Output: true

