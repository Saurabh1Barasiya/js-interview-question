// count no of occurance.


let name = "saurabh";

const count = {};

for(let char of name){
    if(!count[char]){
        count[char] = 1;
    }else{
        count[char] += 1;
    }
}

console.log(count)  // { s: 1, a: 2, u: 1, r: 1, b: 1, h: 1 }