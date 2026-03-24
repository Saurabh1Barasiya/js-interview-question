function sum(...a){
    return function(...b){
        if(b.length === 0){
            return a[0] || 0;
        }else{
            return sum(
                a.reduce((acc,curr)=>acc+curr,0)
                    +
                b.reduce((acc,curr)=>acc+curr,0)
            )
        }
    }
}


const ans = sum(10,20)(30,40)(50,60,70)(80)(90)();
console.log("the answer is",ans);  // the answer is 450