let inputBox = document.querySelector("#inputbox");

const debounce = (func,wait)=>{
    let timerId;
    return (...args)=>{
        if(timerId){clearTimeout(timerId)}
        timerId = setTimeout(()=>{
            func(...args)
        },wait);
    }
}

const callApi = (e) =>{
    console.log(e.target.value);
}

const debouncedCallApi = debounce(callApi,1000);

inputBox.addEventListener("input",debouncedCallApi);
