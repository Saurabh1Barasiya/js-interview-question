// find duplicate element.

let arr = [1,3,4,2,2,4,0,5,6,7,5,3];

let sortedArry = arr.sort((a,b)=>a-b);
console.log(sortedArry)  // [ 1, 2, 2, 3, 4 ]

for(let i = 0; i < sortedArry.length; i++){
    if(sortedArry[i] == sortedArry[i+1]){
        console.log("Duplicate items",sortedArry[i]);
    }
}

// Duplicate items 2
// Duplicate items 3
// Duplicate items 4
// Duplicate items 5