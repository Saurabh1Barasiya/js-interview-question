const myinput = document.getElementById("myinput");

function debounce(func,delay){
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.call(this,...args);
        }, delay);
    };
}

function findSuggestions(e){
    console.log(e.target.value);
}

const decoratedFindSuggestions = debounce(findSuggestions,1000);
myinput.addEventListener("input",decoratedFindSuggestions);
