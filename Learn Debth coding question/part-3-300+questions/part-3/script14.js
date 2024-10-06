// but me chata hu ki recursion infinite ho but call stack na bhare.

let i = 0;
function show(){
    console.log(i++);
    setTimeout(()=>{
        show();
    },0)
}

show();