const income = {
    skills : 5,
    monthly (){
        return this.skills * 2;
    },
    yearly : ()=> 5 * this.skills,
}

console.log(income.monthly()); // 10
console.log(income.yearly());  // NaN.

// arrow function ke pass this nahi hota uska this 1 level up hota h.