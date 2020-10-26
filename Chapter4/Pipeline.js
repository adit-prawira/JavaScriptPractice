class Delay{
    constructor(str) {
        this.str = str;
        return this.str;
    }
}

class Filter{
    constructor(val1, val2, val3, val4, val5) {
        this.strings = [val1, val2, val3, val4, val5];
        return this.strings;
    }
}

class Pipeline{
    constructor(input1, input2) {
        this.input1 = input1;
        this.input2 = input2;
        this.isFirst = true;
        this.charVal = this.input2['str'].charCodeAt(this.input2['str']);
    }
    call(curVal){
        for(let val of this.input1){
            if(curVal === val){
                return null;
            }
        }
        if(this.isFirst){
            this.isFirst =false;
            return String.fromCharCode(this.charVal);
        }
        this.charVal+=1;
        return String.fromCharCode(this.charVal);
    }
}

const example = new Pipeline(new Filter('a', 'e', 'i', 'o', 'u'),
    new Delay('A'));
for(let val of ['a','b','c','d','e']){
    console.log(val,'->',example.call(val));
}