// let arr = [1,1,1,0,0,0];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// placed array all zeros at the started position and 
// ones follow the zeros.


const arr = [1,0,1,0,1,0,0,1];

const zeros = arr.filter((ele)=>ele===0);
const ones = arr.filter(ele=>ele===1);
console.log(zeros);
console.log(ones);

const targetArry = [...zeros,...ones];
console.log(targetArry);   //   [ 0, 0, 0, 0, 1, 1, 1, 1 ]

