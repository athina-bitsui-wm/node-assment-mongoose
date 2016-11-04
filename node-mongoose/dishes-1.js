//grab the thing that we need
var mongoose = require('mongoose');
//all way have a uppercase S in Schema.
var Schema = mongoose.Schema;

//create a Schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        name: "Uthapizza"
    },
    description: {
        type: String,
        required: true,
        image: "imges/uthapizza.png",
        category: "mains",
        label: "Hot",
        price: "4.99",
        description: "A unique ...",
        comments: [
            {
                rating: 5,
                comment: "imagine all the eatables, living in conFusion",
                author: "John Lemon"
            },
            {
                rating: 4,
                comment: "Sends anyone to heaven, i wish i could get my mother-in-law to eat it!",
                author: "Paul McVites"
            }
        ]
    }
}, {
    timestamps: true
});

//the Schema is useless so far
//we need to create a model using it
var Dishes = mongoose.model('Dishes', dishSchema);

//make this available to our node applications
module.exports = Dishes;