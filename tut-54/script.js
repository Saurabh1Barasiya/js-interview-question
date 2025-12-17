// Jab hum JavaScript mein kisi class ka object create karte hain (using new keyword), to new.target ek special property hoti hai jo batati hai ki kaunsa constructor directly call hua hai.

class AbstructClass{
    constructor(){
        if(new.target === AbstructClass){
            throw new Error("You cannot create object of an Class.");
        }else{
            this.myName = "saurabh";
        }
    }
}

class Derived extends AbstructClass{
    constructor(){
        super();
        console.log("I am called...");
    }
}


// const obj = new AbstructClass();
// console.log(obj);

const der = new Derived();
console.log(der);
console.log(der.myName);