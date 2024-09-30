console.log("a");
(async function () {
    const x = await 5;
    console.log("c");
})();
console.log("b");

// a b c