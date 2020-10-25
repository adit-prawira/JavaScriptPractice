const pipeline = (initial, first, second) =>{
    return second(first(initial));
};

const trim = (text) => {return text.trim()};
const dot = (text) => {return text.replace(/ /g, '.')};

const original = '  this example uses text  ';

// trim(original) -> 'this example uses text'
// -> dot('this example uses text') -> 'this.example.uses.text'
const trimThenDot = pipeline(original, trim, dot);

// dot(original) -> '..this.example.uses.text..'
// -> trim('this example uses text') -> '..this.example.uses.text..'
const dotThenTrim = pipeline(original, dot, trim);

console.log(`trim then dot: |${trimThenDot}|`);
console.log(`dot then trim: |${dotThenTrim}|`);
