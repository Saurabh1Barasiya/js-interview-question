// Kya hai forEach()?
// forEach() ek JavaScript array method hai jo array ke har element par ek callback function ko execute karta hai. Yeh method har element ke liye ek baar function ko call karega, left to right order me.


// array.forEach(callback(currentValue, index, array), thisArg);



// Parameters
// callback:

// Har element par jo function chalana hai, wo yaha define hota hai.
// Arguments:
//     currentValue: Current element.
//     index (optional): Current element ka index.
//     array (optional): Original array.
// thisArg (optional):

//     Callback function ke andar this ka reference set karne ke liye.





// Key Points
//     Kuch return nahi karta: forEach() hamesha undefined return karta hai.
//     (Agar nayi array chahiye, toh map() use karo.)
//     Original array ko modify nahi karta, par agar aap callback ke through array ke elements ko change karte ho, to wo reflect hoga.
//     Break ya continue nahi use kar sakte: Yeh loop ko rok nahi sakta. Agar aapko loop todna hai, to for ya for...of loop use karo.




const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});
