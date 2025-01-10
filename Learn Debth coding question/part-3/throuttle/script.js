const body = document.querySelector('body');
console.log(body);

function throuttling(func,delay){
    let waiting = false;
    return function(...args){
        if(!waiting){
            waiting = true;
            setTimeout(()=>{
                func.apply(args);
                waiting = false;
            },delay);
        }
    }
}

let count = 0;
function calc(dets){
    count+=1
    console.log(count);
}

const decoratedThrouttle = throuttling(calc,1000);
body.addEventListener("mousemove",decoratedThrouttle);