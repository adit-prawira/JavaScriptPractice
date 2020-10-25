const arrayInput = [1,2,3,4,5,6,7,8,9];

function impure(values){
    const result = [];
    for(var i = 0; i<values.length; i++){
        result.push(values[i]+1);
    }
    return result;
}
result = impure(arrayInput);
console.log(`test:  |${arrayInput}|`);
console.log(`test result:   |${result}|`);