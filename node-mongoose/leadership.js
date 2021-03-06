var mongoose = require('mongoose');
assert = require('assert');

var Dishes = require('./dishes-1');

//connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    //we are connected
    console.log("connection correctly to server");

    //create a new dish
    Dishes.create({
        name: 'Peter Pan',
        image: "image/alberto.png",
        designation: "Chief Epicurious Officer",
        abbr: "CEO",
        description: 'Our CEO, Peter,...'
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;
        //get all the dishes
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Update Dish!');
                    console.log(dish);

                    db.collection('dishes').drop(function () {
                        db.close();
                    });
                });
        }, 3000);
    });
});

