let myArray = [1,2,3,4,[4,5],[6,7,[8]]];

function flateArray(arr){
    let result = [];
    for(let element of arr){
        if(Array.isArray(element)){
            result = result.concat(flateArray(element));
        }else{
            result.push(element);
        }
    }
    return result;
}

const ans = flateArray(myArray);
console.log(ans);
