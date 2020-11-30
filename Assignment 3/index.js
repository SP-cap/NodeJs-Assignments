var express = require('express');
var app = express();
var router = require('./routes/api');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');




mongoose.connect('mongodb://localhost/Item');
mongoose.Promise= global.Promise;
app.use(bodyParser.json());
app.use( '/api',router);
 
app.listen(8081);