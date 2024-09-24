const person = {
    name:"Sohan",
    greet : function(age){
        console.log(`my name is ${this.name} and age is ${age}`);
    }
}

const person2 = {
    name:"Saurabh",
}

person.greet.call(person2,25);
// call me hamlog extra arguments normal arguments jese pass karte h.
