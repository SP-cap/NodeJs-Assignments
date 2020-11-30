var concat = require('concat-stream');
var fs = require('fs');

var arrwrite = concat(function(data) {console.log(data);});


arrwrite.write(fs.readFileSync('Q9.txt','utf-8').split(" "))
//arrwrite.write(fs.readFileSync('other.txt','utf-8').split(","))
arrwrite.end()