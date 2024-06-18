const obj = {
    name:"xxxx",
    chek:function(age,place){
        console.log(`My name is ${this.name} and age is ${age} and place is ${place}.`);
    }
}

const obj1 = {
    name:"Saurabh",
}

obj.chek.apply(obj1,[24,"Jabalpur"]); //  bas yaha par hamko formal argumets array ke form par send karna hoga.