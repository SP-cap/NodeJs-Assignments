var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.get('/index', function(request, response){
response.sendFile(__dirname + '/public/index.html');
});
app.listen(3000);