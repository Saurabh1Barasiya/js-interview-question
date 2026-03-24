// function currying .

function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a+b+c+d+e
                }
            }
        }
    }
}

const ans = sum(10)(20)(30)(40)(50);
console.log("totel sum is ",ans);