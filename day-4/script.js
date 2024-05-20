let obj = {
    name : "Saurabh",
    getName : function(){
        console.log(`${this.name} from normal function`); // Saurabh from normal function.
    },

    getNameArrow : ()=>{
        console.log(`${this.name} from arrow function`); // undefined from arrow function.
    }
}

obj.getName();
obj.getNameArrow();

// arrow function ka this hamesha 1 level up hota.

// getNameArrow function ka define h obj me

// to ab 1 level up jao , matlab obj ke bahar. lexical enviroment.