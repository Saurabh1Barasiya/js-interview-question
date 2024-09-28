function Human(fname,lname){
    this.firstname = fname;
    this.lastname = lname;
}

const Mrx = new Human("MR.","X");
const rock = Human("The","Rock");

console.log(Mrx); // Human { firstname: 'MR.', lastname: 'X' }   object autometic return hota h.
console.log(rock); //  undefined

