const validator = require('validator');

const writeAndappend = require('./server');

writeAndappend();
console.log(validator.isEmail('deysagar074gmail.com'));
console.log(process.argv);