// can we access instance properties inside the static method.

// No,instance properties cannot be directly accessed inside a static method in JavaScript.

class Person{
    constructor(name,address){
        this.name = name;
        this.address = address
    }

    static show(){
        console.log(this.name);
        console.log(this.address);
    }
}

const p1 = new Person("Saurabh","Barasiya");
Person.show();