// Write a JavaScript program to calculate the factorial of a given number. 

function factorial(num){
    if(num=== 0 || num === 1){
        return 1;
    }

    return num * factorial(num - 1);
}


let number = 7;
console.log(factorial(number));