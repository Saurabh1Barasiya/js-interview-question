var x = 10;

function foo() {
    console.log(x);   //  undefined , because var has function scope.
    var x = 20;
}

foo();