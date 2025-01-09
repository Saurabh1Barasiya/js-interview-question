// String.prototype.charCodeAt() in JavaScript
// charCodeAt() ek method hai jo ek string ke character ka Unicode value (ASCII code) return karta hai, based on a given index. Yeh Unicode value ek integer ke form mein hoti hai.

// string.charCodeAt(index)


/*
    index: Ek number jo string ke specific character ka position define karta hai.
        0-based index hota hai.
        Default index 0 hai agar specify na kiya ho.
    Return Value:
        Unicode value (ASCII code) of the character at the given index.
        Agar index invalid hai (e.g., out of range), to NaN return karega.
*/

let str = "Saurabh";

console.log(str.charCodeAt(0)); // Output: 83 ('S' ka Unicode value)
console.log(str.charCodeAt(3)); // Output: 114 ('r' ka Unicode value)
console.log(str.charCodeAt(6)); // Output: 104 ('h' ka Unicode value)
console.log(str.charCodeAt(1)); // Output: 97 ('a' ka Unicode value)


let str1 = "A";
console.log(str1.charCodeAt(0));   // 65





let str2 = "Saurabh";

console.log(str2.charCodeAt(10)); // Output: NaN (index out of range)
console.log(str2.charCodeAt(-1)); // Output: NaN (negative index support nahi karta).


/*
Unicode ek international standard hai jo har character (letters, numbers, symbols) ko ek unique number assign karta hai. For example:

'A' ka Unicode value: 65
'a' ka Unicode value: 97
'0' ka Unicode value: 48
*/

console.log("------------------");
for(let i=0;i<str2.length;i++){
    console.log(`${str2[i]} -- ${str2.charCodeAt(i)}`);
}


/*
    S -- 83
    a -- 97
    u -- 117
    r -- 114
    a -- 97
    b -- 98
    h -- 104
*/