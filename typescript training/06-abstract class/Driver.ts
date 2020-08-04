import {Shape} from "./Shape";
import {Circle} from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(0,0,25);
let myRectangle = new Rectangle(0,0, 20,50);

let shapes :Shape[] = [];

shapes.push(myCircle);
shapes.push(myRectangle);

for (let s of shapes){
    console.log(s.getInfo());
    console.log(s.getArea()+"\n");
}

// console.log(myShape.getInfo());
// console.log(myCircle.getInfo());
// console.log(myRectangle.getInfo());