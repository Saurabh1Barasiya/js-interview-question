// Kya hai join()?
// join() ek JavaScript array method hai jo array ke elements ko ek single string me join karta hai. By default, yeh elements ko comma (,) se join karta hai, lekin aap custom separator bhi specify kar sakte ho.


// array.join(separator);

// separator (optional):
// Yeh wo string hai jo array ke elements ke beech me use hoti hai.
// Agar separator specify nahi karte, to default value , hoti hai.




// Key Points
// Array elements ko string me convert karta hai:

// Har element ko string me convert karne ke baad unhe join karta hai.
// Separator ko custom define kar sakte ho:

// Aap chahein to comma, space, dash (-), ya koi bhi custom separator use kar sakte ho.
// Empty slots ko ignore karta hai:

// Agar array me empty slots ho, to woh join me include nahi hote (except undefined ya null values).


const fruits = ["apple", "banana", "cherry"];
console.log(fruits.join());    //    apple,banana,cherry




console.log(fruits.join(""));   // applebananacherry
console.log(fruits.join(" "));   // apple banana cherry



const arr = [1, "hello", true, null];
console.log(arr.join(", "));  // Output: "1, hello, true,"



const params = ["name=John", "age=30", "country=USA"];
const queryString = params.join("&");
console.log(queryString);  // Output: "name=John&age=30&country=USA"









