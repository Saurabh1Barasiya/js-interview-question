let obj1 = {
    name:"Jhon",
    display:function() {
        console.log(this.name);     
    },
    print:()=>{
        console.log(this.name);     
    }
}

let obj2 = {
    name:"saurabh"
}

// obj1.display();

// with the help of obj1 print the value of obj2.

obj1.display.call(obj2);  // saurabh
obj1.print.call(obj2);    // undefined ... because arrow function ke paas this keyword nahi hota h.  arrow function this ki value lexical scope se uthata h.