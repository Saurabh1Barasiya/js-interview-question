// Debouncing....

/*
const input = document.querySelector("#inp");
console.log(input);

function deBounce(func,delay){

    let timerID;
    return (...args)=>{
        if(timerID){
            clearTimeout(timerID)
        }
        timerID = setTimeout(()=>{
            func.call(this,...args);
        },delay);
    }
}

function findSuggetion(event){
    console.log(event.target.value);
}

const debouncFunc = deBounce(findSuggetion,1000)


input.addEventListener("input",debouncFunc);

*/

const myInput = document.querySelector("#inp");


function deBounce(func,deley){
    let timerID;

    return function(...args){
        if(timerID){
            clearTimeout(timerID);
        }

        timerID = setTimeout(()=>{
            func.call(this,...args);
        },deley)
    }
}

function findSuggetion(event){
    console.log(event.target.value);
}

const decoratedDebouce = deBounce(findSuggetion,1000);
myInput.addEventListener("input",decoratedDebouce);



