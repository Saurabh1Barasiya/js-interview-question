function output(wordArr) {
    let data = wordArr.split("_");
    data.forEach((element,index) => {
        data[index] = element[0].toUpperCase() + element.slice(1,);
    });
    return data.join(" ");
}

let words = "computer_science";
console.log(output(words));

