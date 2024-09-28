for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },0);
}


// 5 5 5 5 5



// hamare paas 5 settimeout banege.
// settimeout for loop ke end hone ke baad run hoga.
// or i ki final value 10  5 ho jayegi 



// is problem ko resolve kar sakte using let.

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },0);
}

// 0 1 2 3 4