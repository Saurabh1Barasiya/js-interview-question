// could you please explian me this yaha kisko point kar raha h.
// this yaha us class ko represent karta hai jispar method call ho raha hai.
// Agar Parent.showName() call hota hai, to this Parent class ko represent karega.

class Parent {
    static name = "saurabh";
    static showName() {
        console.log("From parent classs : ",this.name);
    }
}

console.log(Parent.name);
Parent.showName();     //   From parent classs :  saurabh.

// Agar Parent.showName() call hota hai, to this Parent class ko represent karega.


