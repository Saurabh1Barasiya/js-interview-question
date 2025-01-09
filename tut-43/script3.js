// String.prototype.at() in JavaScript
// String.prototype.at() ek string ka character nikalne ke liye use hota hai, based on uska index. Yeh ek modern method hai jo positive aur negative indexes ko support karta hai, jo charAt() ke comparison mein zyada flexible hai.


// string.at(index)

/*
index: 
    Ek number jo character ka position define karta hai.

Positive index: 
    Left se start hoke (0-based index).
Negative index:
    Right se start hoke (-1 last character ke liye).
Return Value: 
    String ka ek character agar index valid hai; agar invalid hai to undefined return karega.
*/

let str = "Saurabh";
console.log(str.at(0));   // S.



let str1 = "Saurabh";

console.log(str1.at(-1)); // Output: "h" (last character)
console.log(str1.at(-3)); // Output: "a" (3rd last character)


let str2 = "Saurabh";

console.log(str2.at(10));  // Output: undefined (index string length se zyada hai)
console.log(str2.at(-10)); // Output: undefined (index string length ke bahar hai)


