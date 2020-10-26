class Delay{
    constructor(str) {
        this.str = str;
        this.isFirst = true;
        this.charVal = this.str.charCodeAt(this.str);
    }

    call(strNew){
        if(this.isFirst){
            this.isFirst =false;
            return String.fromCharCode(this.charVal);
        }
        this.charVal+=1;
        return String.fromCharCode(this.charVal);
    }
}

const example = new Delay('A');

for(let value of ['b','c','d']){
    console.log(value,'->',example.call(value));
}