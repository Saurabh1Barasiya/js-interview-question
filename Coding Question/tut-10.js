// merge two sorted array.

// merge two sorted Array.

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
const final = [];
let i = 0;
let j = 0;

let m = arr1.length;
let n = arr2.length;

while (i< m && j <n){
    if(arr1[i] < arr2[j]){
        final.push(arr1[i])
        i++;
    }else{
        final.push(arr2[j]);
        j++;
    }
}

while(i<m){
    final.push(arr1[i]);
    i++;
}
while(j<n){
    final.push(arr2[j]);
    j++;
}


console.log(final);  // [ 1, 2, 3, 4, 4, 5, 6, 8 ]