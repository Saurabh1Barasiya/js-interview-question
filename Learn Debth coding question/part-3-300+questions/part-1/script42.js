function getMessage(){
    throw 'hello world!';
}

function sayHello(){
    try{
        const data = getMessage();
        console.log('worked',data)
    }catch(e){
        console.log('an error',e);  // an error hello world!
    }
}

sayHello();