// String.prototype.includes() in JavaScript
// includes() ek JavaScript method hai jo check karta hai ki ek string ke andar koi substring (chhota part) exist karta hai ya nahi. Ye true ya false return karta hai.

// string.includes(searchString, position)

/*
    searchString: Substring jo aap check karna chahte ho.
position (optional): String ke kis position (index) se search shuru karna hai. Agar na diya jaye, to default 0 hota hai (poora string search hoga).
*/


/*
            true: Agar searchString string ke andar exist karta hai.
            false: Agar searchString string ke andar exist nahi karta.

*/


let str = "Hello, Saurabh!";

console.log(str.includes("Saurabh")); // Output: true
console.log(str.includes("hello"));   // Output: false (case-sensitive)
console.log(str.includes("world"));   // Output: false


let str1 = "JavaScript is awesome!";

console.log(str1.includes("is"));       // Output: true
console.log(str1.includes("is", 5));    // Output: true (search starts from index 5)
console.log(str1.includes("is", 12));   // Output: false (search starts after "is")




let str2 = "Learn JavaScript";

console.log(str2.includes("javascript")); // Output: false
console.log(str2.includes("JavaScript")); // Output: true
