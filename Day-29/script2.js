const students = [
    { id: 1, name: "Saurabh Barasiya", age: 21, grade: "A", marks: 89 },
    { id: 2, name: "Pooja Singh", age: 23, grade: "C", marks: 60 },
    { id: 3, name: "Aman sahu", age: 23, grade: "C", marks: 34 },
    { id: 4, name: "Ranu goyal", age: 23, grade: "C", marks: 75 },
    { id: 5, name: "Ranu goyal", age: 23, grade: "C", marks: 45 },
    { id: 6, name: "Ranu goyal", age: 23, grade: "C", marks: 55 },
    { id: 7, name: "Ranu goyal", age: 23, grade: "C", marks: 40 },
];

// jin student ke marks 60 se kam h un par 20 marks add kar do (grace).

const addTwentyMarks = students.map((student)=>{
    if(student.marks < 60){
        student.marks += 20;
    }
    return student;
})

// now filter thoes student whoes marks greater > 60

const greaterSixty = addTwentyMarks.filter((student)=>{
    return student.marks > 60;
})
console.log(greaterSixty);


const fullMarks = greaterSixty.reduce((acc,curr)=>{
    return acc + curr.marks;
},0);

console.log(fullMarks);   // 304