// give me the greatest word.

const getGretestWord =(myStr)=>{
    // split the string on basis of sapce.
    let words = myStr.split(" ");
    let word = "";

    for (const value of words) {
        if (value.length > word.length){
            word = value
        }
    }
    return word;

}



const big = getGretestWord("Hello my sdfshfdfdfsfs name is Saurbh");
console.log(big)