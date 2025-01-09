// String.prototype.replace() ek method hai jo string me kisi specified pattern ko replace karta hai ek naye value se. Yeh method original string ko modify nahi karta, balki ek nayi string return karta hai jisme replacement hota hai.

// str.replace(searchValue, newValue)


/*
searchValue: 
    Yeh wo pattern hai jo aap replace karna chahte hain. Yeh ek string ya regular expression ho sakta hai.
newValue:
     Yeh wo value hai jisse searchValue ko replace kiya jayega. Yeh string ho sakti hai, ya agar searchValue regular expression hai, to ek function bhi ho sakti hai.
*/


/*
Return Value:
    Yeh method ek nayi string return karta hai jisme specified pattern ko replace kiya gaya hota hai.
*/



let str = "Hello world";

console.log(str.replace("world", "JavaScript"));  // "Hello JavaScript" (first occurrence of 'world' replaced)

// Agar searchValue ek string hai, to yeh sirf pehli occurrence ko replace karega.
// Agar searchValue ek regular expression hai, aur usme g (global) flag use kiya gaya hai, to sabhi occurrences replace ho jayenge.


let str1 = "apple banana apple orange";

console.log(str1.replace(/apple/g, "grape"));  // "grape banana grape orange" (both 'apple' are replaced)



// Replacing only first occurrence:
let str2 = "apple apple apple";
console.log(str2.replace("apple", "orange"));  // "orange apple apple"


