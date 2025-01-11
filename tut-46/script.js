// method overriding in js.

class Printer{
    print(){
        console.log("Printing document...");
    }
}

class InjectPrinter extends Printer{
    print(){
        console.log("Printing with an Inkjet Printer: High quality, slower speed.");
    }
}


class LaserPrinter extends Printer{
    print(){
        console.log("Printing with a Laser Printer: Fast speed, lower cost per page.");
    }
}

class PhotoPrinter extends Printer{
    print(){
        console.log("Printing high-resolution photos with a Photo Printer.");
    }
}


const printerObj = [new Printer(),new InjectPrinter(),new LaserPrinter(),new PhotoPrinter()];

console.log(printerObj);

printerObj.forEach((obj)=>{
    obj.print();
});