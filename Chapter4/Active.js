class Active{
    constructor(name, transform) {
        this.name = name;
        this.transform = transform;
        this.subscribers = [];
    }

    subscribe(someone){
        this.subscribers.push(someone);
    }

    update(input){
        console.log(this.name,'got',input);
        const output = this.transform(input);
        for(let s of this.subscribers){
             s.update(output);
        }
    }
}

const start = new Active('start', (x) => Math.min(x,10));
const left = new Active('left', (x) => 2*x);
const right = new Active('right', (x) => x+1);
const final = new Active('final', (x) => x);

start.subscribe(left);
console.log(start);
start.subscribe(right);
console.log(start);
left.subscribe(final);
console.log(left);
right.subscribe(final);
console.log(right);
start.update(123);