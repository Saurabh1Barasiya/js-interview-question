// find largest element from an array.

let numberArray = [10,20,30,4,2,5,4,63,1,5];
let maximum = Number.MIN_SAFE_INTEGER;

for(let ele of numberArray){
    if(ele > maximum){
        maximum = ele;
    }
}
console.log(maximum);  // 63