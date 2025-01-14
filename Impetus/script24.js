// Find the Most Frequent Character in a String.
let string = "aabbbcc";

console.log(string);

const obj = {};

for(let char of string){
    obj[char] = 0;
}

for(let char of string){
    if(obj[char]){
        obj[char] += 1;
    }else{
        obj[char] = 1;
    }
}

let maxi = -Infinity;
let char = "";
for(let key in obj){
    if(obj[key] > maxi){
        char = key;
        maxi = obj[key];
    }
}

console.log(`Frequent character : ${char} occurence ${maxi} `);

console.log(obj);