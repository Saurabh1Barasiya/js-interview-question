// String.prototype.concat() in JavaScript
// concat() ek JavaScript method hai jo do ya usse zyada strings ko combine (concatenate) karta hai aur ek nayi string return karta hai. Ye existing strings ko modify nahi karta, balki ek naye string ka result return karta hai.

// string.concat(str1, str2, ..., strN)

let firstName = "Saurabh";
let lastName = "Barasiya";

let fullName = firstName.concat(" ", lastName);
console.log(fullName); // Output: "Saurabh Barasiya"



let fname = firstName.concat(lastName);
console.log(fname);   // SaurabhBarasiya
