// const input = [
//   { id: 1, number: [{ id: 2 }, { id: 3 }] },
//   { id: 4, number: [{ id: 5 }, { id: 6 }] }
// ];

// output

// [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 }
// ]

// console.log(flattenData(input));

// yaha par ye number koi data type nahi hai.

const input = [
  { id: 1, number: [{ id: 2 }, { id: 3 }] },
  { id: 4, number: [{ id: 5 }, { id: 6 }] }
];



function flattenData(arr){
    let result = [];

    function helper(arr){
        for(let item of arr){
            // as we know structire alwasys have id.
            result.push({id:item.id});

            if(item.number && Array.isArray(item.number)){
                helper(item.number);
            }
        }
    }

    helper(arr);
    return result;
}


const flatArray = flattenData(input);
console.log(flatArray);    // [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 } ]