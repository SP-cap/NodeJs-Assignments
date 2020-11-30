var express = require('express');
var app = express();


app.set('view engine', 'pug');

app.get('/home', function (req, res) {
    var date = new Date().toDateString();
    res.render('index', { title: 'Date', message: `${date}` })
  });

  app.listen(3005);