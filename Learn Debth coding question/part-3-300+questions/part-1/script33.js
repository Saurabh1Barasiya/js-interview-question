

String.prototype.youAreAmazing = () =>{
    return "You're amazing my friend.";
}


// sting ke har 1 instance par youAreAmazing method hamko milega.

const who = "viewer";
console.log(who.youAreAmazing());  // You're amazing my friend.

// aese samjho    prototype is a key jo har function and object par apply hoti h.
// ham prototype use karte h common functionality share karne le liye.