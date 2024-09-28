function showData(){
    console.log(`name is ${name}`); // undefined
    console.log(`age is ${age}`);  // ReferenceError: Cannot access 'age' before initialization
    var name = "saurabh barasiya";
    let age = 999;
}

showData();