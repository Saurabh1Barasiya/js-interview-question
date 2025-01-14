let arr = [1,5,3,4,3,5,6]

const obj = {}

// creating obj with array element.....

for(let ele of arr){
    obj[ele] = 0;
}

for(let ele of arr){
    obj[ele] += 1;
}

for(let ele of arr){
    if(obj[ele] > 1){
        console.log(ele,obj[ele]);   //  5 2 
        break;
    }
}

// console.log(obj);

// 5 ,  2 baar aaya h.