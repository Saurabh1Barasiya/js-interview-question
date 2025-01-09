function getMin(myArr){
    let miniEl = Infinity;

    for(let ele of myArr){
        if(ele < miniEl){
            miniEl = ele;
        }
    }
    return miniEl;
}

const arr = [10,20,30,1000,40,5,6,7,8,100];
const minElement = getMin(arr);
console.log(`Minimum element is ${minElement}`);   // Minimum element is 5.