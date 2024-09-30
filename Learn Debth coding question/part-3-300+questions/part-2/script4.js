const Person = {
    lang : "JS",
    show : function(){
        console.log(`Hi,${this.lang}`);
    }
};

let fn = Person.show;
fn();     // Hi,undefined.

// ham yaha fn() ko window ke context par call kar rahe hai.
// window.fn()   aese call hua hoga.


fn.call(Person); // Hi,JS
Person.show();   // Hi,JS