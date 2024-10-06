(function(){
    Promise.resolve().then(()=>{
        console.log("A");
        Promise.resolve().then(()=>{
            console.log("B");
        });
    });
})();

const id = setTimeout(function(){
    console.log("C");
},0);


/*
    A
    B
    C
*/