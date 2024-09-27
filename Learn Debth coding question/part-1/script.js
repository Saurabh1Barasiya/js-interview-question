// guess the output.


var x = 1;
console.log(x);  // 1 

function x(){
    console.log("2");
}
x()

// output is 1 and typeError.

// in hoisting function declaration get more prority as compare to var variable.


// Explanation --> function or var are hoisted.
// so function take place in the top after that var take plase.

// so in the execution phase x is initialize to 1 .
// so print 1.

// int the next line function call. but x dit not contain function 
// its contain only integer number.