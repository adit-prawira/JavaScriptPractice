const data = ['this','is','a','test'];
console.log('those longer than 3:',
    data.filter((i) => {return i.length > 3}));

const filteredResult =
    data.filter((i) => {return i.length > 3})
        .every((i) => {return i[0]==='t'});

console.log(`filtered array:    |${filteredResult}|`);

console.log('shortened element:',
    data.map((i) => {return i.slice(0,2)}));

function acronym(strings){
    let acronymString = '';
    for(let s of strings){
        acronymString += s[0];
    }
    return acronymString;
}
console.log(`Function method: acronym of [${data}] is ${acronym(data)}`);

//temp = '' -> temp = 't' -> temp = 'ti'
// -> temp = 'tia' -> temp = 'tiat'
const acronymReduce = data.reduce((temp, nextVal) => {return temp+nextVal[0]}, '');
console.log(`Shorter method:    ${acronymReduce}`);

