// function ko call kero without function name.

function show(){
    console.log("WOW");
}

const functionName = 'show';
window[functionName]();          // WOW


// if hamne function ko gloabal space me declare kiya h to with the help of function keyword
// to vo window object me add ho jata h.