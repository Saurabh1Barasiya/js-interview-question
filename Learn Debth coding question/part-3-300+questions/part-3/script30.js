function show(){
    this.lang = "React";
    this.showLang = ()=>{
        console.log(this.lang);
    }
}

const data = new show(); 

// console.log(data)
const fn = data.showLang;
fn();  // React