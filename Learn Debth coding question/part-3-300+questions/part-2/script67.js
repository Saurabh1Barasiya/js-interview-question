class User {
    constructor(name){
        this.name = name;
    }

    login(){

    }
}

const usr1 = new User('X');
const usr2 = new User('Y');

console.log(usr1.login === usr2.login);  // true