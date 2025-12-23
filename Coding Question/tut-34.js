/*
 given array
 let arr = [42,10,19,6,8,7,9,325,0,428,23]
 let size = 3
 convert it like this
 result = [[42,10,19],[6,8,7],[9,325,0],[428,23]]

*/



let arr = [42,10,19,6,8,7,9,325,0,428,23]
let size = 3;
let newArr = [];

let i = 0;
while(i < arr.length){
    let temp = arr.slice(i,i+size)
    newArr.push(temp)
    i = i + size;
}

console.log(newArr);   // [ [ 42, 10, 19 ], [ 6, 8, 7 ], [ 9, 325, 0 ], [ 428, 23 ] ]