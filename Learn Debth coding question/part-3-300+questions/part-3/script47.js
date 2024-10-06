// + operator ki priority jyadha h.
// 10  + false 
// 10  + 0
// 10 ? 0 :20
// 0

const res = 10 + isNaN(2) ? 0 : 20;
console.log(res);  // 0

console.log(isNaN(2)); // false

// () lagao sahi output ke liye.