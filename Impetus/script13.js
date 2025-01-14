// find duplicate element.

let arr = [1,3,4,2,2];
arr.sort((a,b)=>a-b);
// console.log(arr);     // [ 1, 2, 2, 3, 4 ]

let i = 0;
while(i<arr.length-1){
    if(arr[i] == arr[i+1]){
        console.log("duplicate no.. ",arr[i]);
    }
    i++;
}

// duplicate no..  2