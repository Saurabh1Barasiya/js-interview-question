// let arr = [1,2,1,1,1,2,2,3];
// const mySet = new Set(arr);
// console.log(mySet); // { 1, 2, 3 }



let arr = [1,2,1,1,1,2,2,3,4,4,5,6,6,6];
const uniqueEl = [];
for(let element of arr){
    if(!uniqueEl.includes(element)){
        uniqueEl.push(element);
    }
}
console.log(uniqueEl);

