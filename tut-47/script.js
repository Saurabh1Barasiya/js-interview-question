// super() keyword.

// when you are using inheritance and from the subclass you have to call the parent class constructor so we use super() keyword.

// its mandatory to use super keyword in the first line of the child class constructor().

// super() must be the first line in the child constructor.

class Person{
    constructor(name){
        this.name = name;
    }
}

class Employee extends Person{
    constructor(name,jobTitle){
        super(name);  // calling the parent class contructor.
        this.jobTitle = jobTitle;
    }
}

const employee = new Employee("Saurabh","Software Engineer");

console.log("Employee name is : ",employee?.name);
console.log("Employee Job Role is : ",employee?.jobTitle);

