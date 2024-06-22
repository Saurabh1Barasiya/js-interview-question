const parent = {
    prop: 42,
    marks: 99,
    child : {
        firstname:"saurabh",
        place:"harrai",
        state:"madhya pradesh"
    }
};

// console.log(parent);

// ab me is object ko  freez kar raha hu.
Object.freeze(parent);

// to ab top level par jo hai vo to freez ho jayege kese ki props and marks
// but inner object(child) freez nahi ho payega.

delete parent.prop;
console.log(parent); 
// {
//     prop: 42,
//     marks: 99,
//     child: { firstname: 'saurabh', place: 'harrai', state: 'madhya pradesh' }
// }

// dekho delete nahi hua hai.


delete parent.child.state;

console.log(parent);

// {
//     prop: 42,
//     marks: 99,
//     child: { firstname: 'saurabh', place: 'harrai' }
// }

// 👆👆 ye dekho state ki value delete ho gayi h.


// to isko solve karne ke liye hamko deep freeze karna padega. manually