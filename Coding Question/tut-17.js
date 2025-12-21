let str = "hello         kese                  jo";
console.log(str);   // hello         kese                  jo
const result = str.replace(/\s+/g," ");
console.log(result);

/*
    \s --> it means all space new line .
    +  --> means 1 se jyadha space.
    g  --> globally search kero.
*/

console.log(result) // hello kese jo