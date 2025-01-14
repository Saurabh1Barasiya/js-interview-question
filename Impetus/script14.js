let arr = [1,3,5,3,4];
// console.log(arr);
arr.sort((a,b)=>a-b);
let minEl = Math.min(...arr);   // Math.min() ko normal value chahiye   array nahi....
let maxEl = Math.max(...arr);

// console.log(minEl);  // 1
// console.log(maxEl);  // 5

for(let i = minEl ; i <= maxEl ; i++){
    if(!arr.includes(i)){
        console.log("missing element : ",i);    // missing element :  2
    }
}


