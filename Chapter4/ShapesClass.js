class Square{
    constructor(size) {
        this.name = 'Square';
        this.size = size;
    }
    getArea(){return this.size*this.size;}
    getPerimeter(){return 4*this.size};
}
class Circle{
    constructor(radius) {
        this.name = 'Circle';
        this.radius= radius;
    }
    getArea(){return Math.PI*Math.pow(this.radius,2);}
    getPerimeter(){return 2*Math.PI*this.radius};
}
class Rectangle{
    constructor(width, height) {
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
    }
    getArea(){return this.height*this.width;}
    getPerimeter(){return (2*this.height)+(2*this.width)};
}

const allShapes = [
    new Square(3),
    new Circle(5),
    new Rectangle(2, 3)
];

for(let shape of allShapes){
    const a = shape.getArea();
    const p = shape.getPerimeter();
    console.log(`${shape.name}:\n->area:  ${a}\n->perimeter:  ${p}\n`);
}