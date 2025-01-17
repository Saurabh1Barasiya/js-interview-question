const obj = {
    name: 'deeecode',
    age: 20,
    print: function () {
        console.log(this);
    }
}
obj.print();  // object itself.   { name: 'deeecode', age: 20, print: [Function: print] }