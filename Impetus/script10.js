// two pair sum .

let arr = [1,2,3,4,5,6,7,8];
let sum = 9;
let output = [];

let i = 0;
while (i<arr.length){
    let j = i+1;
    while (j < arr.length){
        if(arr[i] + arr[j] === sum){
            output.push([arr[i],arr[j]]);
        }
        j++;
    }
    i++;
}
console.log(output);


// [ [ 1, 8 ], [ 2, 7 ], [ 3, 6 ], [ 4, 5 ] ]