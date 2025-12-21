
// placed array all zeros at the started position 
// and ones follow the zeros.


const arr = [1,0,1,0,1,0,0,1];

// const zeros = arr.filter((num)=>num===0);
// const ones = arr.filter((num)=>num===1);

// console.log([...zeros,...ones]); //  [  0, 0, 0, 0, 1, 1, 1, 1 ]



// now i am writing shorthand.

console.log([...arr.filter((num)=>num===0),...arr.filter((num)=>num===1)]);

// [  0, 0, 0, 0, 1, 1, 1, 1 ]