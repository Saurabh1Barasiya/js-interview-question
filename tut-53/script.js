// find the common value and print them.

let  firstArray= [ 
    {'versionId' : 234},
    {'versionId': 687}
];
 
let secoundArray = [ 
    {'versionId' : 234},
    {'versionId': 687},
    {'versionId' : 555},
    {'versionId': 8888},
    {'versionId' : 777},
    {'versionId': 3433}
];

for(let elems of firstArray){
    for(let secElems of secoundArray){
        if(elems.versionId === secElems.versionId){
            console.log(secElems);
        }
    }
}
 

// -------------------------- 
// output.
// { versionId: 234 }
// { versionId: 687 }
// --------------------------