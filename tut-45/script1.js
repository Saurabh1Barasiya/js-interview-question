// multileval  inheritance...
// so we achive reusebility...

class A{
    greet(){
        console.log("how are you");
    }
}

class B extends A{

}

class C extends B{

}

const obj = new C();
obj.greet();   // how are you.