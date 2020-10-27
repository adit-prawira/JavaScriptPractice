var a = [1,2,3];
a[1000] = 1;
console.log(a.length);


const i = {'a':'b'};
i.type = 'pudding';
console.log(i.type);

var a;
var b = (a=3)?true:false;
console.log(b);