var fs = require('fs');


fs.readFile('Q5.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    
        
     var s = (data.match(/John/g)).length;
     console.log(s);
    }
  );