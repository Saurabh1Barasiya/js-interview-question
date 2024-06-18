// get the minimum value using reduce().

let numbers = [10, 5, 8, 1, 20, 15, 100];
const minimumValue = numbers.reduce((acc,curr)=>{
    return Math.min(acc,curr);
},Infinity);

console.log(minimumValue);
