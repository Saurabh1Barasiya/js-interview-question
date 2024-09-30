console.log(-0 == 0);  // true
console.log(-0 === 0); // true


console.log(Object.is(-0,0));  // false

// Object.is() ==> -value or nan ko sahi tarik se execute karta h .  as compare to ==.