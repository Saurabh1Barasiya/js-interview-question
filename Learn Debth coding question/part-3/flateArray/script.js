// flate an Array with code.

function getFlate(myArr){
    let myArray = [];

    for(let ele of myArr){
        if(Array.isArray(ele)){
            myArray = myArray.concat(getFlate(ele));
        }else{
            myArray.push(ele);
        }
    }
    return myArray;
}

const arr = [1,2,3,[4,5,[6],[7,[8,[9]]]]];

console.log(getFlate(arr));