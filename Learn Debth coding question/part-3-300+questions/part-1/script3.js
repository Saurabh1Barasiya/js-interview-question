console.log(parseInt("108"));            // 108
console.log(parseInt("108*250"));        // 108
console.log(parseInt("108saurabh"));     // 108

// parseInt jahatak sting ko number me convert kar sakta h kar lega.
// or jaha usko samaj nahi aayega vaha se string ko discart kar dega

// example 2 me "108*250"   108 ke baad * h to vo * start ko convert nahi kar payega
// * ke baad ki sting ko discard kar dega.


console.log("---------------------------------------------");
console.log("case 2");

console.log(+("108"));            // 108
console.log(+("108*250"));       // NAN
console.log(+("108saurabh"));     // NAN