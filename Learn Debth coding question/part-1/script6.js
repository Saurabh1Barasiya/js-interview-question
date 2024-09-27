var employeeId = "abc";
function foo(){
    employeeId = "123";
    return;
    function employeeId(){}
}
foo();
console.log(employeeId); // abc