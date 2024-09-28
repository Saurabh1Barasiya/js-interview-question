function* genratorFn(i){
    console.log("A");
    yield i;
    console.log('b');
    yield i*2;
}

const gen = genratorFn(10);
console.log(gen.next().value);
console.log(gen.next().value);