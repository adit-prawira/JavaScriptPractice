class Filter{
    constructor(val1, val2, val3, val4, val5) {
        this.strings = [val1, val2, val3, val4, val5];
    }

    call(curVal){
        for(let input of this.strings){
            if(curVal === input){
                return null;
            }
        }
        return curVal;
    }
}

const example = new Filter('a', 'e', 'i', 'o', 'u');

for(let val of ['a','b','c','d','e']){
    console.log(val,'->',example.call(val));
}