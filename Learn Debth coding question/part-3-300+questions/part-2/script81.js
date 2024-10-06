// check if a given character in uppercase 


function isUpperCase(char){
    return char.toUpperCase() === char;
}

console.log(isUpperCase('a'));   // false
console.log(isUpperCase('A'));   // true
console.log(isUpperCase('b'));   // false
console.log(isUpperCase('B'));   // true



