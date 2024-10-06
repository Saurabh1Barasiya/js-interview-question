function sum(num1,num2){
    num1 = 100;
    num2 = 200;
    return arguments[0] + arguments[1];

    // arguments array bhi update ho jayga.
    // if app aesa nahi karna cahte ho to "use strict" ka use kero.
}

console.log(sum(10,20));  // 300