let arr = [3,3,4,4,5,2,2,1,1,0,0];
let margedArray = [];

// const uniqueElements = new Set(arr);
// const uniqueArry = new Array(...uniqueElements).sort((a,b)=>a-b);

// uniqueArry.forEach((element)=>{
//     margedArray = margedArray.concat(arr.filter(el=>el === element));
// });

// console.log(margedArray);


const uniqueElements = new Set(arr);
console.log(uniqueElements);  // Set(6) { 3, 4, 5, 2, 1, 0 }

const uniqueArry = new Array(...uniqueElements).sort((a,b)=>a-b);
console.log(uniqueArry);  // [ 0, 1, 2, 3, 4, 5 ]


uniqueArry.forEach((element)=>{
    margedArray = margedArray.concat(arr.filter(el=>el === element));
});

console.log(margedArray);

