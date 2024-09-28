const person = {
    name:"saurabbh",
    addresss : {
        city:"harrai",
    },
};

Object.freeze(person);

person.name = null;
person.addresss.city = null;

console.log(person);   //  { name: 'saurabbh', addresss: { city: null } }

// object freze hone ke baad updation,deletion and modifation nahi hota.

// Object.freeze -> Object ko only 1 hi leval par freeez karta h.

