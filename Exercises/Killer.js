const input =
    {'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas', 'Bill', 'Grace'],
    'Peter': ['Lucy', 'Kyle']};
const dead = ['Lucas', 'Bill', "Grace"];

murderer = (suspectInfo, dead) =>{
    var tempFreq = 0;
    const freq = {};
    const fres = [];
    for(let name of Object.keys(suspectInfo)){
        for(let victim of dead){
            if(suspectInfo[name].filter((item) =>
            {return victim===item;})[0]===victim){
                tempFreq+=1;
            }
        }
        freq[name] = tempFreq;
        fres.push(tempFreq);
        tempFreq = 0;
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    return getKeyByValue(freq, Math.max.apply(null, fres));
};

console.log(murderer(input, dead));