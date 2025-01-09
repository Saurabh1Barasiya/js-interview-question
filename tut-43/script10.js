// lastIndexOf() method ek string mein substring ya character ka last occurrence (yaani, aakhri baar uska index) find karta hai. Agar substring ya character nahi milta, to yeh -1 return karta hai.


// string.lastIndexOf(searchString, position).

    // searchString: Substring ya character jo aap search karna chahte ho.
    // position (optional): String mein kaha se search shuru karna hai (from the end). Default value string.length - 1 hoti hai, yaani puri string se search hota hai.


    // Return Value:
    // Agar substring ya character milta hai, to uska last index return hota hai.
    // Agar substring ya character na mile, to -1 return hota hai.
    

let str = "Hello, Saurabh! Welcome to Saurabh's world.";

console.log(str.lastIndexOf("Saurabh")); // Output: 22 (last occurrence)
console.log(str.lastIndexOf("Hello"));   // Output: 0 (first occurrence, but `lastIndexOf` searches from end)
console.log(str.lastIndexOf("World"));   // Output: 39 (last occurrence)
console.log(str.lastIndexOf("Java"));    // Output: -1 (not found)
    

let string = "sasasbasbaba";
console.log(string.lastIndexOf("a"));  // 11




console.log("---------------------------------------------------");
let str1 = "JavaScript is awesome. JavaScript is fun.";

console.log(str1.lastIndexOf("JavaScript", 30));  // Output: 0 (search from position 30, last 'JavaScript' found at 0)
// Output: -1 (search from position 10, no occurrence found)
