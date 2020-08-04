import { Shape } from "./Shape";

export class Circle extends Shape {
    
    
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    constructor (x:number, y:number, private _radius: number){
        super(x, y);
    }

    getInfo():string {
        return super.getInfo() + ` radius=${this._radius}`;
    }
}