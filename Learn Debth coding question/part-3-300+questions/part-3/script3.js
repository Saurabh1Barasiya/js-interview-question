function a(){
    var var1 = 1 , var2 = 2;
    console.log(var1,var2);
}

a(); // 1 2

function b(){
    var num1 = num2 = 1;
    // yaha num2 undeclared variable ho jo ki window object me jakr save ho jayega.
    console.log(num1,num2);  //  1 1
}

b();
console.log(num2);  // 1