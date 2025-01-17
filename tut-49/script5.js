const person = {
    name:"bhagwan",
    func:()=>{
        console.log(this);
    }
}

person.func();   // window object .