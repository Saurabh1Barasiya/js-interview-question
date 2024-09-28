const user = {
    email : "abc@domain.com",
    updateEmail : email =>{
        this.email = email;
    }
};

user.updateEmail("latest@email.in");
console.log(user.email);    // abc@domain.com

// arrow function ke paas this ni hota h.