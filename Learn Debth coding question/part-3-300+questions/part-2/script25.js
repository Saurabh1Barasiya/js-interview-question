const key = "constructor";

const obj = {};

if(obj[key]){
    console.log("Hello admin");  //  Hello admin
}else{
    console.log("Hello Guest");
}


if(key in obj){
    console.log("Hello admin");  //  Hello admin
}else{
    console.log("Hello Guest");
}


// but object ke paas constructor key ho h hi nahi.
// leking ye object ke prototype chain me vo key ko search karne jata h
// or prototype chain me constructor key present hoti h.


// to  hamersh obj ke shat hasOwnProperty ka use kero.