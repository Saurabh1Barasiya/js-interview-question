let obj1 = {
    name:"Saurabh",
    account:{
        faceBook:{
            email:'saurabh@facebook.com',
            joined:2010,
        },
        twitter:{
            email:'saurabh@twitter.com',
            joined:2019,
        },
        instaGram:{
            email:'saurabh@instaGram.com',
            joined:2018,
        }
    }
}

let obj2 = {...obj1};
// console.log(obj1);
// console.log(obj2);

obj2.account.faceBook.email = "saurabhbarasiya@gmail.com";

// console.log(obj1);
// console.log(obj2);
console.log(obj1.account.faceBook.email);  // saurabhbarasiya@gmail.com
console.log(obj2.account.faceBook.email);  // saurabhbarasiya@gmail.com

// to dekho yaha dono ki vlaue change hi gayi h. but aesa nahi hona tha hamne to 
// spread operator (...) ka use kiya tha.


// jab object je ander nested objects hote h to us me me normal property to copy ho jati h.
// but nested proprty copy nahi hoti h, vo apna reference add kar deti h .


// iska solutionn ye h ki ham log   JSON.parse(JSON.stringify())  ka use kare.
// JSON.parse(JSON.stringify())


console.log("Now we are making copy with the help of Json.parse() and Json.stringify()");





let acc1 = {
    name:"Saurabh",
    account:{
        faceBook:{
            email:'saurabh@facebook.com',
            joined:2010,
        },
        twitter:{
            email:'saurabh@twitter.com',
            joined:2019,
        },
        instaGram:{
            email:'saurabh@instaGram.com',
            joined:2018,
        }
    }
}

let acc2 = JSON.parse(JSON.stringify(acc1));
acc2.account.faceBook.email = "unknown@facebook.com";
console.log("Object 1",acc1.account.faceBook.email); 
console.log("Object 2",acc2.account.faceBook.email);



// but yaha bhi JSON.parse(JSON.stringify()) ka 1 drawback h if hamara object bhut bada h
// matklab 1000 nested object contain karta h tab us case me 
// ham pahle object ko string me fir string se object me convert karege to bhut time lag jayega or ye hamari
// application ko time consumming bana dega.



// 👇👇👇👀👀👀.

// to iske liye ham structuredClone() ka use karte h
// script5.js me jam isko samajte hai.

