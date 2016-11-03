//grab the thing that we need
var mongoose = require('mongoose');
var Schema = mongoose.schema;

//create a Schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//the Schema is useless so far
//we need to create a model using it
var Dishes = mongoose.model('Dishes', dishSchema);

//make this available to our node applications
module.exports = Dishes;