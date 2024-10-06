// input    "JS"
// Output   "JSJSJSJSJS"

let inp = "JS";
let retVal = inp.repeat(5);
console.log(retVal);       // JSJSJSJSJS


let arr = [...Array(5)].fill("JS").join("");
console.log(arr);   // JSJSJSJSJS
