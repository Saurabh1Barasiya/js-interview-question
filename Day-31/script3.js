const personInfo = {
    firstname : "Saurabh",
    lastname  : "Barasiya",
    showName  : function(address){
        return `first name is ${this.firstname} and lastname is ${this.lastname} and address is ${address}`;
    }
}

const member = {
    firstname:"harshit",
    lastname:"vashistya",
}

const bindedFunction = personInfo.showName.bind(member,"Chhindwara");

console.log("Remaning works....");

// call the binnded function.
console.log(bindedFunction());

// first name is harshit and lastname is vashistya and address is Chhindwara.