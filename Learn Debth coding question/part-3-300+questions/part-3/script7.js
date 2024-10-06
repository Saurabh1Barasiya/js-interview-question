localStorage.setItem('pass',false);
const isPass = localStorage.getItem('pass');

// hab bhi localstorage or session storage me kaam karte h
// to vo value ko string me store kart h
// usme false ko 'false'  aese set kiya .

if(isPass){
    console.log("You clear the exam");  // You clear the exam
}else{
    console.log("You failed");
}
