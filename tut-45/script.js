// single inheritance ...
// so we achive reusebility...

class parentClass{
    greet(){
        console.log("hello kese ho app!!!");
    }
}

class clildClass extends parentClass{
    
}

const obj = new clildClass();
obj.greet();