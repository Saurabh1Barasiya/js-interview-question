// make sure sum function works with n number of arguments.

function sum(...nums){
    return nums.reduce((acc,curr)=>{
        return acc + curr;
    },0);
}

console.log(sum(1,2,3));        //  6
console.log(sum(1,2,3,4));      // 10
console.log(sum(1,2,3,4,5));    // 15


function sumAgain(){
    return [...arguments].reduce((acc,curr)=>{
        return acc + curr;
    },0);
}

console.log(sumAgain(1,2,3));        //  6
console.log(sumAgain(1,2,3,4));      // 10
console.log(sumAgain(1,2,3,4,5));    // 15