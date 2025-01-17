const obj = {
    name: 'deeecode',
    age: 200,
    print: () => {
        console.log(this.name); // undefined.
    }
}
obj.print();