var x = 10;

function foo() {
    console.log(x);  // 10 , because hamne x ko function ke ander define nahi kiya h 

    // to abhi ye x ko globally search karega .
    // x yaha global variable h.
}

foo();