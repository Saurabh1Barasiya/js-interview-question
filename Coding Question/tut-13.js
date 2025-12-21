// how many items occur how many times.

let arr = [1,5,3,4,3,5,6];

// console.log(arr);

const count = {}

for(let ele of arr){
    if(!count[ele]){
        count[ele] = 1;
    }else{
        count[ele] += 1;
    }
}

console.log(count);  // { '1': 1, '3': 2, '4': 1, '5': 2, '6': 1 }

for(let key in count){
    if(count[key]>1){
        console.log(`${key} occurs ${count[key]} times.`);
    }
}

// 3 occurs 2 times.
// 5 occurs 2 times.