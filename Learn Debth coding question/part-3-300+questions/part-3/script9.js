// find odd numbers.
// give squre of that numbers.

const arr = [1,2,3,4,5];

const modifiedArray = arr.filter((num)=>{
    return num%2!==0;
}).map((num)=>Math.pow(num,2));

console.log(modifiedArray);  // [ 1, 9, 25 ]