class Person{
    constructor(name) {
        this.name = name;
    }

    greet(isFormal){
        if(isFormal){
            return `Hi, my name is ${this.name}`;
        }else{
            return `Waddup BITCH!!!! I'm ${this.name}`;
        }
    }

    farewell(){
        return `Goodbye`;
    }
}

class Scientist extends Person{
    constructor(name, areaOfStudy) {
        super(name);
        this.areaOfStudy = areaOfStudy;
    }
    greet(formal){
        return `${super.greet(formal)}, `+
            `let us talk about ${this.areaOfStudy} - ${super.farewell()}`;
    }
}

const parent = new Person('Aditya');
const geek = new Scientist('Shelvy', 'Computer Science');
console.log(`${parent.greet(false)} - ${parent.farewell()}`);
console.log(geek.greet(true));