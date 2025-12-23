/*
.Replace repeated values with 1
 like this 
    [1,2,3,2,3,4] -> [1,1,1,1,1,4]

*/

let arr = [1,2,3,2,3,4];

function transport(newArr){

    const newMap = {};
    // first we count the occurence.
    for(let ele of newArr){
        if(!newMap[ele]){
            newMap[ele] = 1;
        }else{
            newMap[ele] += 1;
        }
    }
    console.log(newMap);    // { '1': 1, '2': 2, '3': 2, '4': 1 }

    newArr.forEach((element,index)=>{
        if(newMap[element] > 1){
            newArr[index] = 1;
        }
    })

}

transport(arr)
console.log(arr);   // [ 1, 1, 1, 1, 1, 4 ]