const message = 108;

function getInfo(){
    console.log(message);  // ReferenceError: Cannot access 'message' before initialization
    const message = "abc";
}

getInfo();