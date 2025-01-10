// here we are create variable #balence private
// and with the help of methods we access #balence inside the class.

// we can not access the #balence outside the class.

class accountInformation{
    #balence    // define a private variable.

    constructor(initialBalence){
        this.#balence = initialBalence;
    }

    getBalence(){
        return this.#balence;
    }

    withdrawAmount(amount){
        if (amount > 0 && amount < this.#balence){
            this.#balence = this.#balence - amount;
            console.log(`withdrew amount ${amount}`);
        }else{
            console.log("Invalid or insufficient funds for withdrawal");
        }
    }

    depositAmount(amount){
        if(amount>0){
            this.#balence += amount;
            console.log("Amount created successfully !!!");
        }else{
            console.log("Invalid amount : ",amount);
        }
    }

}

const accountObj = new accountInformation(100);
// account.#balence      // can not access this variable because its private.

console.log(accountObj.getBalence());

accountObj.depositAmount(600);
console.log(accountObj.getBalence());;

accountObj.withdrawAmount(500);
console.log(accountObj.getBalence());;
