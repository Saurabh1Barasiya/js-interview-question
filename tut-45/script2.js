// hierarichal inheritance 

// inheritance is means to archive resubility.


class parentClass{
    greet(){
        console.log("hi how are you...");
    }
}

class child1 extends parentClass{

}

class child2 extends parentClass{

}

const c1 = new child1();
c1.greet();     // hi how are you...

const c2 = new child2();
c2.greet();    // hi how are you...
