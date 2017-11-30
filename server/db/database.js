var mongoose = require('mongoose');
var $ = require('jquery');
// var axios = require('axios');
var GroceryItem = require('./../models/GroceryItem.js')
var JenkinsJobConfig = require('./../models/JenkinsJobConfig.js')
var JenkinsData = require('./../models/JenkinsData.js')
// var J = require('./models/jenkinsData.js')

var helper = require('./../../app/helpers/RestHelper.js');


var options = {
 useMongoClient: true

}

console.log("here");

var request = require('request');
var agentOptions;
var agent;
var https = require("https");
agentOptions = {
  host: 'ustr-hudson-1.na.uis.unisys.com'
, port: '443'
, path: '/'
, rejectUnauthorized: false
};
  console.log("Here:");

agent = new https.Agent(agentOptions);

var b = {};
var c = {};
request({
  url: "https://ustr-hudson-1.na.uis.unisys.com/api/json?tree=jobs[name,url,color]"
, method: 'GET'
, agent: agent
}, function (err, resp, body) {
  // console.log("res = "  + resp);

b = body;
cb(b);
})

function cb(b){
  request({
    headers: {
   Cookie: 'CoreID6=60279998738614772876911&ci=90305185; __unam=ac846fd-15d63cf25d8-73715a35-5; __utma=52366573.1826042629.1500617967.1500617967.1501756506.2; __utmz=52366573.1500617967.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); ACEGI_SECURITY_HASHED_REMEMBER_ME_COOKIE=S3VtYXJZYTE6MTUxMjczMzQ5Mjc4NjozZTk3YTY0NmFkN2I4M2Y1YmFiYjBhMTRjMDdiYmYzOWZhNjk0ZTA0MDhjZWJiZGM5OWExZmQ4OWIwOWU1Nzgx',
    },
    url:"https://ustr-hudson-1.na.uis.unisys.com/jobConfigHistory/api/json?filter=jobs&pretty=true&tree=configs[currentName,date,hasConfig,job,oldName,operation,user,userID]",
    method: 'GET',
    agent: agent
  }, function(err, resp, body){
    c= body;
    c=JSON.parse(c);
    // console.log(c);
  // console.log(body);
   dbConnect(b, c);


})
b = JSON.parse(b);
// console.log(b.jobs[2]);
// b.jobs.forEach(function(item){
//   console.log(item);
// })
// dbConnect(b, c);
}
function dbConnect(b, c){
mongoose.connect('mongodb://localhost/dashboard_3', options,
function(){
    mongoose.connection.db.dropDatabase();
       

//     var items = [{
//     name: 'icecream'
// }, {
//     name: 'Waffles'
// }, {
//     name: 'Candy',
//     purchased: true
// }, {
//     name: 'Snacks'
// }];

// items.forEach(function(item){
//     new GroceryItem(item).save();
// })

b.jobs.forEach(function(item){
    new JenkinsData(item).save();
})
c.configs.forEach(function(item){
  new JenkinsJobConfig(item).save();
})
})

}