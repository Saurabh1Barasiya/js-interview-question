//  Write a JavaScript program to calculate the factorial of a given number. 


function factriol(num){
    if(num ==0 || num == 1){
        return 1;
    }

    let fact = 1;
    for(i = 1;i<=num;i++){
        fact = fact * i;
    }

    return fact;
}

const result = factriol(5);
console.log(result);