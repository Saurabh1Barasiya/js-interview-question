const obj = {
    chek:function(){
        console.log(`My name is ${this.name} and age is ${this.age} and place is ${this.address}.`);
    }
}

const obj1 = {
    name:"Saurabh",
    age:24,
    address:"Jabalpur"
}

obj.chek.apply(obj1); //  bas yaha par hamko formal argumets array ke form par send karna hoga.