// sort 0's and 1's without any method.

const arr = [0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1];

let start = 0;
let i = 0;
let end = arr.length - 1;

while(i < end){
    if(arr[i] == 0){
        [arr[i],arr[start]] = [arr[start],arr[i]]
        i ++;
        start++;
    }else{
        [arr[i],arr[end]] = [arr[end],arr[i]]
        end--;
    }
}

console.log(arr);

// [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

