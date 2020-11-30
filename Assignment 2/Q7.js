let list = [
    {
      "id": 1,
      "product": "Soap",
      "price": "10"
    },
    {
      "id": 2,
      "product": "Cups",
      "price": "80"
    },
    {
      "id": 3,
      "product": "Shampoo",
      "price": "120"
    }
  ];
  
  
  
  
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(3004);
  
  app.get('/lists', (request, response) => {
    response.json(list);
  });
  
  app.post('/lists', (request, response) => {
    const newl = request.body; 
     list.push(newl) ;
   
   response.json(list);
  });
  
  app.get('/lists/:id', (request, response) => {
    const listId = Number(request.params.id);
    const getlist = list.find((lists) => lists.id === listId);
  
    if (!getlist) {
      response.status(500).send('Name not found.')
    } else {
      response.json(getlist);
    }
  });
  app.patch('/lists/:id', (req, res) => {
    list.find(list => list.id == req.params.id, req.body);
    if (!list) return res.sendStatus(404);
    list.completed = !list.completed;
    res.json(list);
   });
  
  
  app.delete('/lists/:id', (request, response) => {
    const listId = Number(request.params.id);
    const newlist = list.filter((li) => li.id != listId);
  
    if (!newlist) {
      response.status(500).send('Name not found.')
    } else {
      list= newlist;
      response.json(list);
    }
  });