// Object.freeze() kya hai?
// Object.freeze() JavaScript ka ek method hai jo ek object ko freeze kar deta hai. Matlab, ek baar object ko freeze kar diya, toh us object mein koi changes nahi kar sakte:

// Naye properties add nahi kar sakte: Freeze hone ke baad, object mein naye properties add nahi kar sakte.
// Properties delete nahi kar sakte: Freeze object se properties delete nahi kar sakte.
// Existing properties ke values change nahi kar sakte: Pehle se jo properties hain, unke values ko change nahi kar sakte.
// Property descriptors change nahi kar sakte: Property ke attributes (jaise configurable, enumerable, writable) ko change nahi kar sakte.


const obj = {
    prop: 42,
};

Object.freeze(obj);

// now we cannot chnage the prop value. error nahi dega.

obj.prop = 50;
console.log(obj.prop); // 42

// we can not delete prop to.

delete obj.prop;
console.log(obj.prop); // 42     delete nahi hoga.

// we can not add new value on this object.

obj.marks = 99;

console.log(obj);  // { prop: 42 }.


// but isme 1 propblem hai 👇👇.

// 👀👀 bject.freeze() sirf shallow freeze karta hai. Matlab, object ke sirf top-level properties freeze hoti hain. Agar kisi property mein dusra object refer ho raha hai, toh wo object freeze nahi hota.
// Deep freeze ke liye, hume manually har nested object ko recursively freeze karna padega.

// isko next file me dekhte hai.

