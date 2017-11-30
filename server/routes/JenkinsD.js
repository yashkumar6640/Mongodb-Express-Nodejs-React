
module.exports = function(app){
var mongoose = require('mongoose');

// var JenkinsData = require('./../models/JenkinsData.js');
var JenkinsData = mongoose.model('JenkinsData');
app.route('/api/jenkinsD')
.get(function(req, res){
    JenkinsData.find(function(error, doc){
        res.send(doc);
    });
})
.post(function(req, res){
    var item = req.body;

    var groceryItem = new GroceryItem(item);
    groceryItem.save(function(error, doc){
        res.status(300).send();
    })
})

app.route("api/items/:id")
.delete(function(req, res){
    GroceryItem.find({
        _id: req.params.id
    }).remove();

})

.patch(function(req, res){
    GroceryItem.findOne({
        id: req.body.id
    }), function(error, doc){
        for(var key in req.body){
            doc[key] = req.body[key];
        }
        doc.save();
        res.status(200).send(); 
    }
})

}