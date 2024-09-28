(()=>{
    let x,y;
    try{
        throw new Error();
    }catch(x){
        (x=1),(y=2);
        console.log(x); // 1 
    }
    console.log(x);  // undefined
    console.log(y);  // 2
})();


// The x inside the catch(x) block is local to that block and shadows the outer x.
// The y inside the catch block is the same as the outer y.
// The outer x remains undefined because it was never assigned a value in the outer scope.