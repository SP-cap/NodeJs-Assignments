var express = require('express'); 
var app = express(); 


app.get('/books', function(req, res){ 
    object = JSON.parse(`{"Name": "Ben", "Age":30}`);
    res.json(object); 
}); 
  
app.listen(3006);
