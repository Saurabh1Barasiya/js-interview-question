// 2. Write a JavaScript program to find the maximum number in an array. 


function getMax(array){
    let maxi = -Infinity;
    for(let ele of array){
        if(ele > maxi){
            maxi = ele;
        }
    }
    return maxi;
}


const arr = [10,20,30,1000,40,5,6,7,8,100];
const maxElement = getMax(arr);
console.log(`Maximum element is ${maxElement}`);   //  Maximum element is 100.