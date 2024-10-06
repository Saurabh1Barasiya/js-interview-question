let i = 0;
function show(){
    console.log(i++);
    show();
}

show();

// recursion hote hote call stack bhar jayega
// RangeError: Maximum call stack size exceeded


// but me chata hu ki recursion infinite ho but call stack na bhare.

// next  script me answer hoga.
