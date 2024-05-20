let obj = {
    name: "Saurabh",

    getName: function() {
        console.log(`${this.name} from normal function`);
    },

    getNameArrow: () => {
        console.log(`${this.name} from arrow function`);
    }
}

obj.getName();        // "Saurabh from normal function"
obj.getNameArrow();   // "undefined from arrow function"

// Demonstrating lexical context of arrow function
let anotherObj = {
    name: "Another",
    getNameArrow: obj.getNameArrow
};

anotherObj.getNameArrow(); // Still "undefined from arrow function."
