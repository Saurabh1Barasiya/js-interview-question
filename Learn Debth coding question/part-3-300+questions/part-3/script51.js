class Language{
    static library = "Vue";
    library = "React";

    log(){
        console.log(this.library);   // react
    }

    static log(){
        console.log(this.library);  // Vue
    }
}

const obj = new Language();
obj.log();   // react
Language.log(); // Vue