const arr = [
    {name:'X',age:1},
    {name:'A',age:10},
    {name:'C',age:2},
    {name:'B',age:15},
    {name:'R',age:25},
]

console.log(arr);

arr.sort((a,b)=>{
    return a.age-b.age;
});

console.log(arr);

/*
    [
        { name: 'X', age: 1 },
        { name: 'C', age: 2 },
        { name: 'A', age: 10 },
        { name: 'B', age: 15 },
        { name: 'R', age: 25 }
    ]
*/
