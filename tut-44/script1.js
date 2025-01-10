// Achive Abstruction.
// Private Methods for Internal Details

class coffieMachine{
    // private method
    #boilwater(){
        console.log("boiling the water");
    }

    // private method
    #addMilk(){
        console.log("adding milk");
    }

    // private method
    #addBrewCoffee(){
        console.log("adding coffee");
    }

    makeCoffee(){
        this.#boilwater();
        this.#addMilk();
        this.#addBrewCoffee();

        console.log("coffee is ready please add suger and have it....😊😊😊");
    }
}

const machine = new coffieMachine();
machine.makeCoffee();


// So abstruction says show only required data.
// yaha hamne makeCoffee ke ander se  boilwater , addMilk , addBrewCoffee

// to object ke pass only makeCoffee() h bas 
// coffee kese ban rahi h ye user ko nahi pata.

// user bas makeCoffee() ko call kar raha h .