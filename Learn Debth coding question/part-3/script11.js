// fibonacchi number genrator...

function fibonacchi(num){
    let a = -1,b = 1;

    for(let i=0;i<num;i++){
        let res = a+b;
        console.log(res);
        a = b;
        b = res;
    }
}

fibonacchi(10);