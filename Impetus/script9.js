// sort 0's and 1's and 2's

let arr = [0,0,2,2,1,0,1];


let i = 0;
let start = 0;
let end = arr.length - 1;

while(i<=end){
    if(arr[i] == 0){
        [arr[i],arr[start]] = [arr[start],arr[i]];
        i++;
        start++;
    }else if(arr[i] == 1){
        i++;
    }else{
        [arr[i],arr[end]] = [arr[end],arr[i]];
        end --;
    }
}

console.log(arr);    

//    [0, 0, 0, 1, 1, 2, 2]