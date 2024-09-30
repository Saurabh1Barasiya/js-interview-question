// how to make passing argument mandatory ?

function check(){
    throw new Error("argument is mandatory...");
}

function show(name=check()){
    console.log(name);
}

show();