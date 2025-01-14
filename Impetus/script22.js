// Find the First Non-Repeated Character in a String.
let string = "swiss";

const obj = {};

for(let char of string){
    obj[char] = 0;
}

for(let char of string){
    if(obj[char]){
        obj[char] += 1;
    }else{
        obj[char] = 1;
    }
}

for(let char of string){
    if(obj[char] === 1){
        console.log(char);
        break;
    }
}

// w.