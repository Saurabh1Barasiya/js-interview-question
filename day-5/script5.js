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

let acc2= structuredClone(acc1);
acc2.account.faceBook.email = "unknown@facebook.com";

console.log("Old object",acc1.account.faceBook.email);   // saurabh@facebook.com
console.log("New Object",acc2.account.faceBook.email);   // unknown@facebook.com
