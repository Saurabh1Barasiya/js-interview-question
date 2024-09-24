// explain me about decorator in js.

function decorFunc(func){
    console.log("Hi greetigs,");
    return func;
}

function showname(){
    console.log("Your name is Saurabh Barasiya.");
}

const retFunc = decorFunc(showname);
retFunc();

