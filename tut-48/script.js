// static properties can be inherited in the inheritance.

class Parent {
    static name = "saurabh";
    static showName() {
        console.log("From parent classs : ",this.name);
    }
}

class Child extends Parent {
    static showName() {
        super.showName() // calling parent class method.
    }
}

console.log(Child.name);   // Child
Child.showName();

