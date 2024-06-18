// call function in js.

// with the help of call() we can easily set the value of this keyword.

const obj = {
    name:"xxxx",
    chek:function(){
        console.log(`My name is ${this.name}`);
    }
}

const obj1 = {
    name:"Saurabh",
}

obj.chek();  // My name is xxxx.

obj.chek.call(obj1); // My name is Saurabh.