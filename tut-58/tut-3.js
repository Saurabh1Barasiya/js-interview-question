// infinite currying.

function sum(a){
    return function(b){
        if(b === undefined){
            return a;
        }else{
            return sum(a+b);
        }
    }
}

const ans = sum(1)(2)(3)(4)(5)();
console.log("The answer is : ",ans);