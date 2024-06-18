// know about flatmap() in js

// ye function map() and flat() ka combination hota h.

// ye map() ke result par flat() ko apply kar deta h.

// but yaha par depth kaam nahi karti jo normal flat() par kaam karti h.

const myArray = [
    { id: 1, name: "saurabh", skills: ['html', 'css', 'javascript'] },
    { id: 2, name: "peeyush", skills: ['python', 'nodejs'] },
    { id: 3, name: "suhani", skills: ['pega',] },
    { id: 4, name: "anu", skills: ['machine learning', 'java', 'python'] },
];

let skillsArray = myArray.flatMap((ele, index, arr) => {
    return ele.skills;
})

console.log(skillsArray);

/*
[
    'html',
    'css',
    'javascript',
    'python',
    'nodejs',
    'pega',
    'machine learning',
    'java',
    'python'
]

*/
