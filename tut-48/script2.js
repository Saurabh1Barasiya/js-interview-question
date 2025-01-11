// can we access static properties inside instance methods..

// No, static properties cannot be directly accessed inside instance methods in JavaScript. This is because static properties and methods are associated with the class itself, while instance methods are associated with individual objects (instances) of the class.



class Parent {
    static PI = 3.14;

    getValue(){
        console.log(this.PI);
    }
}

const obj = new Parent();
obj.getValue();          // undefined.



// However, you can still access static properties inside instance methods indirectly, by referencing the class name.

class Person{
    static name = "Saurabh";

    showName(){
        console.log("accessing static variable using class name",Person.name);
    }
}

const p1 = new Person();
p1.showName();
