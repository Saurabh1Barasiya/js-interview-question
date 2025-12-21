// Find the Most Frequent Character in a String.
let string = "aabbbcccccee";

const obj = {};

for(let char of string){
    if(!obj[char]){
        obj[char] = 1;
    }else{
        obj[char] += 1;
    }
}

console.log(obj);  // { a: 2, b: 3, c: 5, e: 2 }

let maxmimum = Number.MIN_SAFE_INTEGER;
let ans;

for(let key in obj){
    if(obj[key] > maxmimum){
        maxmimum = obj[key]
        ans = key
    }
}

console.log(ans);  // c
console.log(maxmimum); // 5