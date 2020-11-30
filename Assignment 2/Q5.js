var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.get('/form',function(req,res){
    res.render('form', {qs: req.query});
});

app.post('/form',urlencodedParser, function(req,res){
    console.log(req.body.str.split('').reverse().join(''));
    res.render('form', {qs: req.query});
});


app.listen(3002);