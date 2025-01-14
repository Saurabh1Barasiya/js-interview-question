let string = "sakshi";

const obj = {

}

for(let char of string){
    if(obj[char]){
        obj[char] += 1;
    }else{
        obj[char] = 1;
    }
}

console.log(obj);