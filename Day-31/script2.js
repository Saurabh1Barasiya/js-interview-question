const person = {
    name:"Sohan",
    greet : function(age,address){
        console.log(`my name is ${this.name} and age is ${age} and Address is ${address}`);
    }
}

const person2 = {
    name:"Saurabh",
}

person.greet.apply(person2,[25,"harrai"]);
// call me hamlog extra arguments normal arguments jese pass karte h.
