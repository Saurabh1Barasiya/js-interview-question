let name = 'Dev';

function getName(){
    console.log(name);   // ReferenceError: Cannot access 'name' before initialization
    let name = "frontendmaster";
}

getName();