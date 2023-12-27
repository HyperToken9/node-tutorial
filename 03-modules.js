// Modules
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-export');
// console.log(names);

sayHi('Susan');
sayHi(names.peter);
sayHi(names.john);
console.log(data.items[2]);
sayHi(data.singlePerson.name);