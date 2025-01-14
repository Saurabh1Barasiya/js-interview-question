let string = "i love java i love javascript";
const strngArr = string.split(" ");
console.log(strngArr);

const obj = {};

for(let ele of strngArr){
    if(obj[ele]){
        obj[ele] += 1;
    }else{
        obj[ele] = 1;
    }
}

console.log(obj);