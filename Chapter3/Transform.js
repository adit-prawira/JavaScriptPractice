function transform(values, operations){
    let result = [];
    for(let v of values){
        result.push(operations(v));
    }
    return result;
}

var data = ['one', 'two', 'three'];
var upper = transform(data,(str) => {return str.toUpperCase()});
var first = transform(data, (str) => {return str[0]});
console.log(`upper:    |${upper}|`);
console.log(`first letter:    |${first}|`);