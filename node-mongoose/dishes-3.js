//grab the thing we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
//create a schema
var dishSchema = new Schma({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamp: true
});
//the schema is useless so far
//we need to create model using it
var Dishes = mongoose.model('Dishes', dishSchema);
//make this available to our node applications
module.exports = Dishes;