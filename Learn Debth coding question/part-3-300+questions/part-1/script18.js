function showModal(){
    console.log(showModal.timeOut);
}

showModal();  // undefined.

showModal.timeOut = 200;
showModal.timeOut = 100;

showModal();  // 100.


// javascript me function ko object ke jese use kar sakte h.
// ye error nahi dega.

