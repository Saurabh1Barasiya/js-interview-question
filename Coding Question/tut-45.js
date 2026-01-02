// Count character occurrences in a string.

function countCharacters(string) {
    count = {};
    for (let char of string) {
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char] += 1;
        }
    }

    // console.log(count)   // { b: 1, a: 3, n: 2 }

    for(let [key,value] of Object.entries(count)){
        console.log(`${key} occur ${value} times.`);
    }
}

countCharacters("banana");