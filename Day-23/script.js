console.log(hello());

function hello(){
    return "how are you";
}



// function expression can not be hoisted.

var foo = function(){
    return 9;
}

console.log(foo());
// Volcafe