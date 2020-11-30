
var express = require('express');
var app = express();
app.get('/year', (req, res) => {
         var a = req.query.age;
         var today = new Date();
         var year = parseInt(today.getFullYear());
         

        res.send(`You were born in ${year-a}`);
        
    }
   
);
app.listen(3000);