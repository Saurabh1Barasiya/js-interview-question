// Find the First Non-Repeated Character in a String.
let string = "swiss";

const obj = {};

for(let char of string){
    if(!obj[char]){
        obj[char] = 1;
    }else{
        obj[char] += 1;
    }
}


for(let key in obj){
    if(obj[key]==1){
        console.log("first non reapting character : ",key);
        break;
    }
}

// first non reapting character :  w

console.log(obj);   // { s: 3, w: 1, i: 1 }
