//  count the accurance of words.

let string = "i love java i love javascript";
let stringArr = string.split(' ');
console.log(stringArr);  // [ 'i', 'love', 'java', 'i', 'love', 'javascript' ]

const obj = {};

for(let element of stringArr){
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element] += 1;
    }
}

console.log(obj);  // { i: 2, love: 2, java: 1, javascript: 1 }

console.log(Object.entries(obj)); 
// [ [ 'i', 2 ], [ 'love', 2 ], [ 'java', 1 ], [ 'javascript', 1 ] ]


console.log(Object.values(obj));   // [ 2, 2, 1, 1 ]

console.log(Object.keys(obj));  // [ 'i', 'love', 'java', 'javascript' ]