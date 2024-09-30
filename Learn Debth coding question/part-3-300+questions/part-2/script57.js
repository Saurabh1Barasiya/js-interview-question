// call method me agar kuch bhi premitive value paas hui h to 
// vo us value ko object me convert kar deta h. 

function test(){
    console.log(typeof this); // object
    console.log(this); // [String: '']
}

test.call("");