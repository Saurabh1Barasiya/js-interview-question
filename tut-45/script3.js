// prototype inheritances

const obj = {};

// So hare we are adding firstname and lastname in the prototype chain.

obj.__proto__.firstName = "Saurabh";
obj.__proto__.lastName = "Barasiya";

console.log(obj);            //    {}
console.log(obj.firstName);  //    Saurabh
console.log(obj.lastName);   //    Barasiya


