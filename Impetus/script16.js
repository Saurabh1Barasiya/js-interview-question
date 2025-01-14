// find common elelemnt in three sorted arrays.

const arr1 = [1,5,10,20,40,80];
const arr2 = [6,7,20,80,100];
const arr3 = [3,4,15,20,30,70,80,120];

for(let val of arr1){
    if(arr2.includes(val) && arr3.includes(val)){
        console.log(val);
    }
}

// 20 80.

