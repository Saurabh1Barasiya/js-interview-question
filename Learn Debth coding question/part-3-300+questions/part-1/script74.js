const person = {
    name : "saurabh"
}

Object.seal(person);

person.name = "backbencher";
person.skill = "JS";

delete person.name;

console.log(person);  // { name: 'backbencher' }

// Object.seal() -- > object par modification karta h
//               -- > no addition , no deletion. 


// or agar freez karoge to modifiy bhi nahi kar payege.