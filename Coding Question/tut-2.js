// find minimum value form arrray.
// console.log(Number.MIN_SAFE_INTEGER)   // -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER)   //  9007199254740991

let numberArray = [10,20,30,4,2,5,4,63,1,5];

let minimum = Number.MAX_SAFE_INTEGER;
for(let ele of numberArray){
    if( ele < minimum){
        minimum = ele;
    }
}

console.log("minimum value ", minimum)  // minimum value  1
