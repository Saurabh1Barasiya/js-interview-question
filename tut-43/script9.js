let str = "Hello, Saurabh!";

console.log(str.indexOf("Saurabh")); // Output: 7 (index of 'S')
console.log(str.indexOf("Hello"));   // Output: 0 (index of 'H')
console.log(str.indexOf("World"));   // Output: -1 (not found)



let str1 = "JavaScript is amazing, and JavaScript is fun!";

console.log(str1.indexOf("JavaScript"));       // Output: 0 (pehli baar kaha mila)
console.log(str1.indexOf("JavaScript", 10));   // Output: 27 (10th index ke baad search shuru hui)
console.log(str1.indexOf("Java", 30));         // Output: -1 (30 ke baad nahi mila)



