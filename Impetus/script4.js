// find the missing elelemt in an array.

let arr = [1,2,3,7,8,9,10];
let minElet = Math.min(...arr);
let maxElet = Math.max(...arr);

const missingElement = [];
// console.log(minElet);
// console.log(maxElet);

for(let i = minElet; i <= maxElet; i++){
    if(!arr.includes(i)){
        missingElement.push(i);
    }
}

console.log(missingElement);