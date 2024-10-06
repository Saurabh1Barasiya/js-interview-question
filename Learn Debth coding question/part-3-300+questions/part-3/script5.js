// function call kero without parinthesis.

function show(){
    console.log("i love js");
}

show``; // i love js
new show; // i love js

// third way me hamko get ka use karna padega.

const obj = {
    get myname(){
        console.log("saurah");  // saurah
    }
}

obj.myname; // saurabh