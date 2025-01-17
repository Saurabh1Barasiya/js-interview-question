let fname="Saurabh";
const obj = {
    fname: 'deeecode',
    age: 200,
    print: () => {
        console.log(this.fname); // Saurabh.
    }
}
obj.print();