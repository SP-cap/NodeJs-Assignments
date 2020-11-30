var express = require('express');
var app = express();
 


app.get('/',function(req,res){
     res.send('Hello, World !');
 });
 app.get('/time',function(req,res){
    var d = new Date();
    var n = d.toISOString();
    res.send(`${n}`);
});
  

const PORT = process.env.PORT || 8080;
app.listen(1337);
    
