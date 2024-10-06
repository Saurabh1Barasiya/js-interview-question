var length = 20;
function count(){
    console.log(this.length); // 3
}

const data = [count,"A",0];

data[0]("Hey!")

// call kiske respect me hua array ke
// and array ke pass length 3 h.