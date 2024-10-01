let person = {
    name: 'Saurabh',
    address: {
        city: 'Mumbai',
        pin: 400001
    }
};

// Freeze the outer object
Object.freeze(person);

// Try to modify outer object
person.name = 'Amit';  // Ye kaam nahi karega

// Try to modify the nested object
person.address.city = 'Delhi';  // Ye kaam karega kyunki nested object freeze nahi hai

// Try to add a new property to nested object
person.address.country = 'India';  // Ye bhi kaam karega

console.log(person);


/*
{
    name: 'Saurabh',
    address: { city: 'Delhi', pin: 400001, country: 'India' }
}
*/  


/*

Object.freeze() ek method hoti hai jo ek object ko "freeze" kar deti hai. Jab ek object freeze ho jata hai, toh tum:

Koi nayi property add nahi kar sakte.
Koi existing property ko delete nahi kar sakte.
Koi existing property ki value ko change nahi kar sakte.
Koi existing property ko reconfigure (like changing descriptors) nahi kar sakte.
In simple terms, freeze karne ke baad object bilkul "immutable" (unchangeable) ho jata hai.



Just like Object.seal(), Object.freeze() bhi shallow (surface level) freeze karta hai, deep freeze nahi karta. Matlab nested objects freeze nahi hote unless tum unko separately freeze karo.



*/