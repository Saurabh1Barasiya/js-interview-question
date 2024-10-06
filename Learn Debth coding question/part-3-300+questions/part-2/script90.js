const bird = {
    name : "parroit",
}

const animal = {
    name : "Lion",
}

function show(){
    console.log(this.name);
}

const objShow = show.bind(bird);

objShow();  //    parroit


// bind permanantly context set kar deta h fir ham usko change nahi kar sakte h.

objShow.call(animal);     // parroit



