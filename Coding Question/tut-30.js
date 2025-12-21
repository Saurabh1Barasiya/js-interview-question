// sort 0s 1s and 2s without any method.

let arr = [0,1,2,0,1,2,0,1,2];

let start = 0;
let i = 0;
let end = arr.length - 1;
while(i <= end){
    if(arr[i] == 0){
        [arr[i],arr[start]] = [arr[start],arr[i]]
        i++;
        start++;
    }else if(arr[i] == 1){
        i++;
    }else{
        [arr[i],arr[end]] = [arr[end],arr[i]]
        end--;
    }
}

console.log(arr); // [ 0, 0, 0, 1, 1, 1, 2, 2, 2]