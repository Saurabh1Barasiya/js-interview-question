let myinput = document.getElementById("myinp");
console.log(myinput);

function debouceFunc(func,delay){
    let timerID;
    return function(...args){
        if(timerID){
            clearTimeout(timerID);
        }

        timerID = setTimeout(()=>{
            func.call(this,...args);
        },delay);
    }
}


function findSuggestaion(event){
    console.log(event.target?.value);
}

let decoratedFunc = debouceFunc(findSuggestaion,1000);

myinput.addEventListener("input",decoratedFunc);



const body = document.querySelector("body");
console.log(body);

function throuttle(func,delay){
    let waiting;
    return (...args)=>{
        if(!waiting){
            waiting = true;
            setTimeout(()=>{
                func.apply(this,args);
                waiting = false;
            },delay);
        }
    }
}

let count = 0;
const decorThrouttle=throuttle(()=>{
    count+=1;
    console.log("counting....",count);
},5000);

body.addEventListener("mousemove",decorThrouttle);

