// Write a JavaScript function to check if a given number is prime. 

function getPrime(num){
    if(num <= 1) {
        return false; // 1 and negative no.. are not prime no...
    }


            //  i<Math.sqrt(num)
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

if(getPrime(2)){
    console.log("prime no.");
}else{
    console.log("Not prime no..");
}