// Yeh code mein kuch problem hai.Pehle aap variable numb ko assign kar rahe ho, phir usko declare kar rahe ho using
// let JavaScript mein jab aap let use karte ho, 
// toh variable ko pehle declare karna padta hai, 
// phir usko assign karna hota hai.Agar aap pehle assign karoge aur baad mein declare karoge, toh error aayegi.

numb = 6;   // Yeh galat hai kyunki `let` ke saath pehle declare karna zaroori hai
console.log(numb); // Error aayegi
let numb;    // Yeh baad mein declare ho raha hai, isliye problem hogi

// Error:
// Cannot access 'numb' before initialization
// ka matlab hai ki aapne
// numb
// ko declare karne se pehle use karne ki koshish ki.


/*
let numb;
numb = 6;
console.log(numb);

*/


// Yahaan pe pehle numb ko declare kiya hai, phir usko value assign ki hai, aur console.log se output 6 aayega.
// Hamesha yaad rakho, jab let ya const use karte ho, pehle declare karna hota hai, phir use kar sakte ho.