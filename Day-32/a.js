function abc(){
    console.log(this); // window
}


const f = ()=>{
    console.log(this); // window
}

abc();
f();

