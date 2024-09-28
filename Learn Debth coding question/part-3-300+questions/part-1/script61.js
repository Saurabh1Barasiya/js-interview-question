class Person{
    constructor(){
        this.name = "Frontend";
        console.log("i am from person");
    }
}

Person = class AnotherPerson{
    constructor(){
        this.name = "Master";
        console.log("i am from AnotherPerson");
    }
};

console.log(Person);                  // [class AnotherPerson]

const member = new Person();
console.log(member.name);            //  Master



// output

// class AnotherPerson]
// i am from AnotherPerson
// Master