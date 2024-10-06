const name = "js";
function show(a,b){
    console.log(a);   // [ 'hey ', ' welcome' ]
    console.log(b);   // js
}

show`hey ${name} welcome`;