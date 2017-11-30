var mongoose = require('mongoose');

var J = {
    name: String,
    url: String,
    color: String

}

var JenkinsData = mongoose.model('J', J, "J");

module.exports = J;