const obj = {
    name: 'deeecode',
    age: 200,
    print: () => {
        console.log(this);
    }
}
obj.print();   // window object because arrow operator dont have this keyword.


// Window {0: Window, 1: global, window: Window, self: Window, document: document, name: '', location: Location, …}