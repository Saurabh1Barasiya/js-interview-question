// remove duplicates using reduce()

// console.log(arr.includes(0));

// basically it will give you true and false.

// let arr = [1,1,1,2,2,3,4,5,6,4,2,3,7,8,9,10,10,11];
let arr = [1,1,1,2,2,3,4,5];

const unique = arr.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr);
    }
    return acc;
},[]);

console.log(unique);

