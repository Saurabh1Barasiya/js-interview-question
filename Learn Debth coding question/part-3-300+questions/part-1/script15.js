class Lizard{
    constructor(){}
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor
    }
}

const tommy = new Lizard();
console.log(tommy.colorChange("blue"));   // tommy.colorChange is not a function

// ham object ka use karke static method ko call nahi kar sakte.

// class ka use karne access karna padega.