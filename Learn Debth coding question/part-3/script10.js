// want prime number between two numbers.
function getPrime(num){
    if(num <= 1){
        return false; // 1 is not prime no.
    }

    for(let i=2;i<num;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}


let start = 1;
let end = 100;

// calling the function.
for(let s = start; s < end ; s++){
    if(getPrime(s)){
        console.log(s);
    }
}