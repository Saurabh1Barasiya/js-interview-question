let car = {
    brand: 'Toyota',
    model: 'Corolla'
};

// Object ko seal karte hain
Object.seal(car);

// Try to add new property
car.year = 2020;  // Ye kaam nahi karega

// Try to delete a property
delete car.model;  // Ye bhi kaam nahi karega

// Change existing property value
car.brand = 'Honda';  // Ye kaam karega

console.log(car);  // { brand: 'Honda', model: 'Corolla' }



/*

    Object.seal() ek method hoti hai jo kisi object ko "seal" kar deti hai. Seal ka matlab hota hai ki tum us object mein naye properties add nahi kar sakte aur jo properties hain unko delete bhi nahi kar sakte. Lekin, jo existing properties hain, unki values ko tum change kar sakte ho.

    Important points:
    New properties nahi add ho sakte.
    Existing properties delete nahi ho sakti.
    Existing properties ki values change ho sakti hain.


    Agar tumhare paas ek nested object hai, aur tum Object.seal() use karte ho, toh sirf outer object seal hoga. Nested objects pe seal apply nahi hoga. Tum nested object ke properties ko modify kar sakte ho, nayi properties add kar sakte ho, ya delete kar sakte ho, kyunki seal sirf shallow (surface level) hota hai, deep nahi.


*/