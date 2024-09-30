// make sure only numbers are passed in add function.

function check(...args){
    args.forEach((value)=>{
        if(typeof value !== 'number'){
            throw new Error("Enter number is Integer...");
        }
    })
}


function add(n1,n2){
    check(n1,n2)
    return n1 + n2;
}

console.log(add(5,5)); // 10
console.log(add('5',5)); // Error: Enter number is Integer...
