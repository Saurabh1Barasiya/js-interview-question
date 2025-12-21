// find missing element in a arrqy.


let arr = [1,3,5,3,4];

console.log("Minimum Value",Math.min(...arr))  // 1
console.log("Minimum Value",Math.max(...arr)) //  5

let start = Math.min(...arr);
let end = Math.max(...arr);

for(let i = start; i <= end ; i++){
    if(!arr.includes(i)){
        console.log("Missing elements",i)
    }
}

// Missing elements 2