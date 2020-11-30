var fs = require('fs');
var name= 'Q10.txt';

  
  
  fs.writeFile(name, 'it'+"'"+'s a long way to the top...', function(err) {
    if (err) throw err;
    fs.readFile(name, 'utf8', function(err, contentFile) {  
        if (err) throw err;
        console.log(name);
        console.log(contentFile);
        console.log('The file has been saved!');
    });
   
  });