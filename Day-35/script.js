const body = document.querySelector('body');
let count = 0;

function throttle(func,delay){
    let waiting = false;
    return (...args)=>{
        if(!waiting){
            waiting = true;
            setTimeout(()=>{
                func.apply(args);
                waiting = false;
            },delay);
        }
    }
}

const throttledMouseMove = throttle(() => {
    count += 1;
    console.log(count);
}, 1000);

body.addEventListener("mousemove", throttledMouseMove);