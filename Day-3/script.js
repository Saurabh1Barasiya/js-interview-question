function checkTestTime(){
    for (let index = 0; index < 1000; index++) {
        console.log("Hello");
    }
}


let before = new Date().getTime();
checkTestTime();
let after = new Date().getTime();

let totalTime = after - before;
console.log("Totel time taken by this program",totalTime);
