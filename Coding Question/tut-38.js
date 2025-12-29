let count = 10;

const newArray = Array.from({length:count},(_,index)=>{
    return index+1;
});

console.log(newArray); //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const undefinedArray = Array.from({length:count});
console.log(undefinedArray); 
//  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]