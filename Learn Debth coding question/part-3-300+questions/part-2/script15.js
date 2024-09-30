const arr = ["ab","cd","ef"];
const str = "abcdef";

const strMatch = str.includes("a"); // true
const arrMatch  = arr.includes("a"); // false

console.log(strMatch);  // true
console.log(arrMatch);  // false