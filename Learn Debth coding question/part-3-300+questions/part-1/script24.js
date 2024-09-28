/*
The issue with your code is that in JavaScript, objects are compared by reference, not by their content. When you compare {age: 18} with another {age: 18}, even though both objects look identical, they are not the same in memory (each object has its own reference).

Here's what's happening:
data == {age: 18}:
This comparison checks if data and {age: 18} are the same object in memory. Since data and the object in {age: 18} have different references, this comparison will always return false.

data === {age: 18}:
This checks if data and {age: 18} are both the same type and the same object in memory. Again, they are different objects (even though their content is the same), so this also returns false.
*/

function checkAge(data){
    if(data == {age:18}){
        console.log("you are an adult");
    }else if(data === {age:18}){
        console.log("you are still adult");
    }else{
        console.log(No age)
    }
}
checkAge({age:18});
