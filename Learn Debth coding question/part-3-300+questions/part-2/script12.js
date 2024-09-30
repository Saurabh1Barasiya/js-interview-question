function sum(){
    return 2+2;
}

function sq(){
    return 4*4
}

let a = (sum(),sq());
console.log(a);  //   16

// experssion ka evolution order left to right hoga.