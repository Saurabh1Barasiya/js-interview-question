let a = 10;
let b = 20;

let c = 30 - (a = b + 10);
console.log(c); // 0

//  (a = b + 10)
//  a = 20+ 10 
//  a = 30
//  c = 30 - 30
//  c = 0