// two pair sum .

let arr = [1,2,3,4,5,6,7,8];
let sum = 9;
let output = [];

for(let i=0; i<arr.length;i++){
    for(let j = i+1;j< arr.length ; j++){
        if(arr[i]+arr[j] == sum){
            output.push([arr[i],arr[j]])
        }
    }
}

console.log(output);

