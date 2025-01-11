// When calling normal methods of a parent class using super, it is not mandatory to use super as the first line in the method.


class Parent{
    print(){
        console.log("Printing...");
    }
}

class Child extends Parent{
    print(){
        console.log("Start printing from Laser...");
        super.print();
        console.log("End printing from Laser...");
    }
}

const obj = new Child();
obj.print();