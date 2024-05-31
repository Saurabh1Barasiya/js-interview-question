// give me the greatest word.

// approch 2.


const getGretestWord =(myStr)=>{
    // split the string on basis of sapce.
    let words = myStr.split(" ");
    let sortedWords = words.sort((a,b)=>a.length - b.length);

    // now its sort based on th lenght.

    return sortedWords.at(-1); // accessing last element from the sorted array.
    
}


const big = getGretestWord("Hello my sdfshfdfdfsfs name is Saurbhbarasiya");
console.log(big)