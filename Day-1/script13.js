function foo(){
    let a = 1;
    let b = 2;
    var c = 3;

    console.log(a);  // 1
    console.log(b);  // 2
    console.log(c);  // 3
}

foo()

console.log(c); // ReferenceError: c is not defined.