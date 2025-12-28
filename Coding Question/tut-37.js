let myStr = "$saurabh@gmail.com";
// console.log(myStr.substring(1))

myStr = myStr.substring(1);  // saurabh@gmail.com
let myStrArray = myStr.split("@"); 
console.log(myStrArray);    // [ 'saurabh', 'gmail.com' ]

let part1 = myStrArray[0];
let part2 = myStrArray[1].split(".");
console.log(part2);   // [ 'gmail', 'com' ]

console.log([part1,...part2])