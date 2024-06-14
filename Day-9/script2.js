var name="my name is changed";

const obj1 = {
    name:"Jhon",
    display:function() {
        console.log(this.name);     
    },
    print:()=>{
        console.log(this.name);     
    }
}

const obj2 = {
    name:"saurabh",
}

obj1.display.call(obj2);
obj1.print.call(obj2);  