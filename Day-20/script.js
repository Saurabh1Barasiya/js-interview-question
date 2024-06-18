// About bind function in js.

const details = {
    print:function(){
        return `name is ${this.name} surname is ${this.surname} email is ${this.email}`
    }
}

const obj = {
    name:"saurabh",
    surname:"barasiya",
    email:"saurabhbarasiya.sb@gmail.com"
}

const retFun = details.print.bind(obj);

console.log("Doing rest of works...");

console.log(retFun());


console.log("Doing some more works...");


console.log(retFun());