// Nullish Coalescing Operator (??) kya karta hai?

// JavaScript mein ?? operator ko Nullish Coalescing Operator kaha jata hai. Yeh operator un values ko handle karne mein madad karta hai jo null ya undefined ho sakti hain.

// ?? operator do expressions ke beech use hota hai aur pehla expression null ya undefined hone par doosra expression return karta hai. Agar pehla expression null ya undefined nahi hai, to yeh wahi pehla expression return karta hai.

// let result = expression1 ?? expression2;

// expression1 pehla value hai jo check kiya jayega.
// expression2 doosra value hai jo tab return kiya jayega jab expression1 null ya undefined hoga.


let name = null;
let defaultName = "Guest";

let userName = name ?? defaultName;

console.log(userName); // Output: Guest

let name1 = undefined;
let defaultName1 = "Guest Again.";

let userName1 = name1 ?? defaultName1;

console.log(userName1); // Output: Guest



let name3 = "Myname";
let result = name3 ?? "default";
console.log(result);