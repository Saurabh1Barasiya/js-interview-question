const magicObject = {
    val : 1,

    // getter.
    get a(){
        return this.val++;
    }
}

console.log(magicObject.a);  // 1
console.log(magicObject.a);  // 2
console.log(magicObject.a);  // 3