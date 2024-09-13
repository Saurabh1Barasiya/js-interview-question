// map function.

let nums = [1,2,3,4,5,6];

const numsMulTen = nums.map((current,index,nums)=>{
    return current * 10;
})

console.log(numsMulTen);  // [ 10, 20, 30, 40, 50, 60 ]

// ---------------------------------------------------------------.

// filter function.

const greaterTree = nums.filter((curr,index,nums)=>{
    return curr > 3;
})

console.log(greaterTree);  // [ 4, 5, 6 ]



// reduce function

const singleValue = nums.reduce((acc,curr)=>{
    return acc + curr;
},0);

console.log(singleValue);   // 21