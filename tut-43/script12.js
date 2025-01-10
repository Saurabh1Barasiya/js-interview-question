// String.prototype.padEnd() ek method hai jo string ke end me specified length tak characters add karta hai. Agar string ki current length target length se kam hai, to yeh method uss string ke end me padding characters (by default spaces) add karta hai.


// str.padEnd(targetLength, padString)

/*
targetLength: Yeh wo length hai jahan tak string ko expand karna hai.
padString: Yeh optional argument hai. Yeh wo character(s) hai jo string ke end me add kiye jayenge. Agar yeh specified nahi hai, to default mein space character add hota hai.
*/



/*
    Return Value:
        Yeh method ek nayi string return karta hai jo original string ko target length tak extend karne ke liye padding characters se filled hoti hai.
*/


let str = "Hello";

console.log(str.padEnd(10));  // "Hello     " (by default spaces added)

console.log(str.padEnd(10, "!"));  // "Hello!!!!!" (padding characters are '!')

console.log(str.padEnd(3));  // "Hello" (target length already met, no change)


let str1 = "Hi";
console.log(str1.padEnd(10, "abcd"));  // "Hiabcdabc" (abcd repeats to fill the length)