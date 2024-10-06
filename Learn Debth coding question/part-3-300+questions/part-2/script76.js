function x(){
    a();

    function a(){
        console.log('a');
    }

    a();

    function a(){
        console.log("b")
    }

    a();
}

x();


// three times b
// b b b 
