const square = {
    name: 'square',
    size: 5,
    area : (thisShape) => {return thisShape.size* thisShape.size;},
    perimeter : (thisShape) => {return 4*thisShape.size}
};

const circle = {
    name: 'circle',
    radius: 3,
    area: (thisShape) => {return Math.PI*Math.pow(thisShape.radius,2)},
    perimeter: (thisShape) => {return 2*Math.PI*thisShape.radius}
};

const rectangle = {
    name: 'rectangle',
    width:2,
    height:3,
    area: (thisShape) => {return thisShape.width*thisShape.height},
    perimeter: (thisShape) => {return (2*thisShape.width) + (2*thisShape.height)}
};

function showAll(shapes){
    for(let s of shapes){
        const a = s.area(s);
        const p = s.perimeter(s);
    console.log(`${s.name}:\n->area:  ${a}\n->perimeter:  ${p}\n`);
    }
};

showAll([square, circle, rectangle]);

