const account = {
    a:1,
    b:2,
    c:{
        d:'a',
        e:'e'
    }
}

function makedeepCopy(obj){
    if((typeof obj !== 'object') || (obj === null)){
        return obj;
    }

    var coppiedVal = Array.isArray(obj) ? [] : {};

    var keys = Object.keys(obj);

    for(var i = 0; i<keys.length; i++){
        coppiedVal[keys[i]] = makedeepCopy(obj[keys[i]]);
    }

    return coppiedVal;
}

var deepAccount = makedeepCopy(account);
// console.log("deep clone",deepAccount);

deepAccount.c.d = "no idea";

console.log(deepAccount);
console.log(account)


