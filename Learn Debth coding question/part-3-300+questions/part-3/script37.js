const Person ()=>{
    this.name = "JS";
    return this;
}

const person = new Person(); // eroror h ham arrow function ka use karke object nahi bana sakte.
console.log(person.name);