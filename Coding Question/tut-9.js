// three pair sum

let arr = [1,2,3,4,5,6,7,8];
let sum = 9;
let output = [];

for(let i = 0;i<arr.length;i++){
    for(let j = i+1; j< arr.length;j++){
        for(let k = j+1; k < arr.length;k++){
            if(arr[i]+arr[j]+arr[k] === sum){
                output.push([arr[i],arr[j],arr[k]])
            }
        }
    }
}

console.log(output);   // [ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]