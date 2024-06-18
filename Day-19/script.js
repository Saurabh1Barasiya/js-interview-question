// apply function in js.

// with the help of apply() we can easily set the value of this keyword.

// but yaha arguments ka thoda issue h ,ham function ko argument array [] ke form me send karte hai.
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

obj.chek.apply(obj1); // My name is Saurabh.