let str1 = "apple";
let str2 = "banana";

console.log(str1.localeCompare(str2));  // Negative value (apple comes before banana)  -1

let str3 = "apple";
let str4 = "apple";

console.log(str3.localeCompare(str4));  // 0 (both are same)   0