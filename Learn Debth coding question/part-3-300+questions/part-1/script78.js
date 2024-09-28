const add = x => y => z =>{
    console.log(x,y,z);
    return x + y + z;
}

console.log(add(10)(20)(30));

// breakdown.

function addOld (x){
    return function(y){
        return function (z){
            console.log(x,y,z);
            return x+y+z;
        }
    }
}

const data = addOld(10)(20)(30);
console.log(data);

/*
    10 20 30
    60
    10 20 30
    60
*/
