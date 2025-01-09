// String.prototype.endsWith() in JavaScript
// endsWith() ek JavaScript method hai jo check karta hai ki string ka end ek specific substring se ho raha hai ya nahi. Yeh method true ya false return karta hai.

// string.endsWith(searchString, length)

/*
searchString: Substring jo aap check karna chahte ho.
length (optional):
String ka length specify karta hai jahan tak check karna hai.
Agar specify nahi kiya, to pura string check hota hai.
*/


/*
    Return Value:
    true: Agar string specified searchString se end ho raha hai.
    false: Agar string us substring se end nahi ho raha.

*/

let str = "Hello, Saurabh!";

console.log(str.endsWith("Saurabh!")); // Output: true
console.log(str.endsWith("Hello"));    // Output: false

