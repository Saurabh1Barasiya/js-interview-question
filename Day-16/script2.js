// get the maximum value using reduce.

let numbers = [10, 5, 8, 20, 15, 100];

let maximumValue = numbers.reduce((acc,curr)=>{
    return Math.max(acc,curr);
},-Infinity);

console.log(maximumValue);