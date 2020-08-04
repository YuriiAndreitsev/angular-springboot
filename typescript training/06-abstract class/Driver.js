"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(0, 0, 25);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 20, 50);
var shapes = [];
shapes.push(myCircle);
shapes.push(myRectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var s = shapes_1[_i];
    console.log(s.getInfo());
    console.log(s.getArea() + "\n");
}
// console.log(myShape.getInfo());
// console.log(myCircle.getInfo());
// console.log(myRectangle.getInfo());
