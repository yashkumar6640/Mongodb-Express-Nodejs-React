var mongoose = require('mongoose');

var JenkinsJobConfig = {
currentName: String,
date: String,
hasConfig: Boolean,
job: String,
oldName: String,
operation: String,
user: String,
userID: String
}

var JenkinsJobConfig = mongoose.model('JenkinsJobConfig', JenkinsJobConfig, 'jenkinsJobConfig' )

module.exports = JenkinsJobConfig;