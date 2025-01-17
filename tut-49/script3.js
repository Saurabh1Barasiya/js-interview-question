// falte an array.

var arr =[1,2,3,[4,5],[6,7,[8,[9]]]];

function flateMyWay(arr){
    let myArray = [];

    for(let ele of arr){
        if(Array.isArray(ele)){
            myArray=myArray.concat(flateMyWay(ele));
        }else{
            myArray.push(ele);
        }
    }
    return myArray;
}



const flateArry = flateMyWay(arr);
console.log(flateArry);

// console.log(arr.flat(Infinity));
