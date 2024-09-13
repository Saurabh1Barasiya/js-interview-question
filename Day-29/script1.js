const students = [
    { id: 1, name: "Saurabh Barasiya", age: 21, grade: "A", marks: 89 },
    { id: 2, name: "Ankit Sharma", age: 22, grade: "B", marks: 76 },
    { id: 3, name: "Riya Gupta", age: 20, grade: "A+", marks: 95 },
    { id: 4, name: "Pooja Singh", age: 23, grade: "C", marks: 60 }
];
  
// please get all name .
const names = students.map((student)=>student.name);
console.log(names);  // [ 'Saurabh Barasiya', 'Ankit Sharma', 'Riya Gupta', 'Pooja Singh' ]

// please get all the student whoes marks greater then 75.

const bestStudent = students.filter((student)=> student.marks >= 75);
console.log(bestStudent);

// [
//     { id: 1, name: 'Saurabh Barasiya', age: 21, grade: 'A', marks: 89 },
//     { id: 2, name: 'Ankit Sharma', age: 22, grade: 'B', marks: 76 },
//     { id: 3, name: 'Riya Gupta', age: 20, grade: 'A+', marks: 95 }
// ]


// please add student marks.

const totelsNumbers = students.reduce((acc,curr)=>{
    return acc + curr.marks;
},0);

console.log(totelsNumbers);  // 320