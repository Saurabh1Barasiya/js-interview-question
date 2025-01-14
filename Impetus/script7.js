// const uniqueEl = new Set(arr);
// const myArray = new Array(...uniqueEl);
// console.log(myArray);

// let data = [];

// myArray.forEach((ele)=>{
//     data = data.concat(arr.filter((el)=> el===ele));
// })

// console.log(data);

// let arr = [0,0,1,1,2,2,0,0,1,1,0,2,2,1,3,3,4,4,5];
let arr = [3,3,4,4,5,2,2,1,1,0,0];
let margedArray = [];

const uniqueElements = new Set(arr);
const uniqueArry = new Array(...uniqueElements).sort((a,b)=>a-b);

uniqueArry.forEach((element)=>{
    margedArray = margedArray.concat(arr.filter(el=>el === element));
});

console.log(margedArray);
