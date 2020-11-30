var express = require('express');
const router = express.Router();
const Fruit= require('../models/data');



router.post('/inventory' , function(req,res){
    Fruit.create(req.body).then(function(fruit){

    res.send(fruit);
    
    
    });
    
});
router.get('/inventory',function(req,res)
{
   
   Fruit.find({})
   .exec(function(err,fruits)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(fruits);
           res.json(fruits);
       }
   })
});


router.get('/inventory/:name',function(req,res)
{
   
   Fruit.findOne({})
   .exec(function(err,fruit)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(fruit);
           res.json(fruit);
       }
   })
});

router.put('/inventory/:name' , function(req,res){
    Fruit.findOneAndUpdate({name: req.params.name}, req.body).then(function(fruit){
         res.send(fruit);
    
    
    });
    


});

router.put('/inventory' , function(req,res){
    Fruit.updateMany( req.body).then(function(fruit){
         res.send(fruit);
    
    
    });
    


});

router.delete('/inventory/:name' , function(req,res){
    Fruit.findOneAndRemove({name: req.params.name}).then(function(fruit){
        

    res.send(fruit);
    
    
    });
    


});
router.delete('/inventory' , function(req,res){
    Fruit.remove(function(fruit){
        

    res.send(fruit);
    
    
    });
    


});






module.exports = router;