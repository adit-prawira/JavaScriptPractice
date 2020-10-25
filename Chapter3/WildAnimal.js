const data = [
    {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
    {'date': '1977-7-16', 'sex': 'F', 'species': 'DM'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'PF'},
    {'date': '1977-7-16', 'sex': 'F', 'species': 'PE'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'}
];

var  newData = data.filter((item, index)=> {
    if(Object.entries(item)[1][1]==='F'){
        const newOrder = {};
        newOrder['seq'] = index+1;
        newOrder['year'] = item.date.slice(0,4);
        newOrder['sex'] = item.sex;
        newOrder['species']= item.species;
        delete item.date;
        delete item.sex;
        delete item.species;
        item['seq'] = newOrder.seq;
        item['year']= newOrder.year;
        item['sex'] = newOrder.sex;
        item['species'] = newOrder.species;
        return item;
    }
    });

console.log(newData);