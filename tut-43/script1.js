// String.fromCharCode() ek JavaScript method hai jo Unicode code points (numbers) ko string characters mein convert karti hai.


// String.fromCharCode(num1, num2, ..., numN)

// Unicode ek standard hai jo har character (jaise A, a, 1, @, emojis, etc.) ko ek unique number assign karta hai. Yeh numbers ko hum Unicode values bolte hain.


console.log(String.fromCharCode(65));

console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"
// Yahaan 72 ka matlab H, 101 ka matlab e, aur aise hi baaki letters ka combine hoke "Hello" ban raha hai.



console.log(String.fromCharCode(97)); // Output: "a"


// Kab Use Karte Hain?
// Jab numbers (Unicode values) ko characters mein badalna ho.
// Encoding ya decoding karte waqt, jab string ko manipulate karna ho.

let stringCapitalArray = new Array(26);
console.log(stringCapitalArray);  // [ <26 empty items> ]

var numUnicode = 65;

for(let i = 0; i< stringCapitalArray.length; i++){
    stringCapitalArray[i] = String.fromCharCode(numUnicode++);
}

console.log(stringCapitalArray);

/*
[
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
]

*/




// charCode of A ---   65.
// charCode of a ---   97.


// now create smallelement alphawet.

const stringSmallArray = new Array(26);
var unicode = 97;

for(let index = 0;index < stringSmallArray.length; index++){
    stringSmallArray[index] = String.fromCharCode(unicode++);
}

console.log(stringSmallArray);

/*
[
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]
*/


// empty array for forEach and for of and for in loop kaam nahi karega.