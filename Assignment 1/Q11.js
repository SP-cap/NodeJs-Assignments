var fs = require('fs');


var path = './';
var buffer = fs.readFileSync(path + "Q11.txt");
console.log(buffer.toString());