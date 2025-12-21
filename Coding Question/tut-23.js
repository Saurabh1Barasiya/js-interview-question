// Remove Duplicate Characters from a String.

let stArr = "programming";

// console.log([...new Set(stArr)].join(''))  //progamin

const obj = {};

for(let char of stArr){
    if(!obj[char]){
        obj[char] = 1;
    }else{
         obj[char] += 1
    }
}

let uniqueArr = [];
for(let key in obj){
    if(obj[key] === 1){
        uniqueArr.push(key);
    }
}
console.log(obj);

console.log(uniqueArr.join(''));  // poain