var mongoose = require('mongoose');

var JenkinsSchema = {
    name: String,
    url: String,
    color: String

}

var JenkinsData = mongoose.model('JenkinsData', JenkinsSchema, "jenkinsData");

module.exports = JenkinsData;