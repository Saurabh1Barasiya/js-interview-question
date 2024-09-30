// every chatacter count.

const string = "hare ram hare ramm hare krishna hare ramm";

const count = {};

for (let element of string) {
    if(count[element]){
        count[element] += 1;   
    }else{
        count[element] = 1;
    }
}

console.log(count);