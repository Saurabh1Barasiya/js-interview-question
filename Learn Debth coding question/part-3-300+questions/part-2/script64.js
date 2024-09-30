function logThis(){
    console.log(this);
}

const obj = {
    logThis,
    logThis1(){
        return logThis();
    },

    logThis2(){
        return obj.logThis();
    }
}

logThis(); // window object.


obj.logThis(); // object itself.
obj.logThis1();  // window object.
obj.logThis2() // object itself.
