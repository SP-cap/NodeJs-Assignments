var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name: String,
    quantity: Number
});

const Fruit= mongoose.model('fruit' , DataSchema);
 module.exports = Fruit;