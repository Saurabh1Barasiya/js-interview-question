// let arr = [1, 2, 4, 3, 6, 7];
let arr = [1, 4, 45, 6, 10, 8]
let target = 13;
// let target = 10;
// console.log(arr);
// console.log(target);

let i = 0;
while(i<arr.length){
    let j = i + 1;
    while(j<arr.length){
        let k = j + 1;
        while (k < arr.length){
            if(arr[i]+arr[j]+arr[k] === target){
                console.log(arr[i],arr[j],arr[k]);
            }
            k++;
        }
        j++;
    }
    i++;
}

// 1 4 8








