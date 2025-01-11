// can we call static properties using instance variable ?


// no we can not do it.


class Parent{
    static PI = 3.14;

}

const obj = new Parent();
console.log(obj.PI);     // undefined

