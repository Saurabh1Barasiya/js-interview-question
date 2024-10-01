let person = {};

Object.defineProperty(person,'name',{
    value:'saurabh',
    writable:false,
    enumerable:true,
    configurable:false
});


person.name = "bhai";  // it will not work because      writable:false

for (let key in person) {
    console.log(key,person[key]);      // name saurabh
}

console.log(person);    // { name: 'saurabh' }

