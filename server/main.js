var express = require('express');

var app = new express();

var parser = require('body-parser');

var React = require('react');

// var GroceryItem = require('./models/GroceryItem.js')
// var JenkinsData = require('./models/jenkinsData.js');
// require('babel-register');
require('./db/database.js');
app.get('/', function(req, res){
    res.render('./../app/index.ejs', {});
    // var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));
    // GroceryItem.find(function(err, doc){
    //     var generated = React.renderToString(application({
    //         items: doc

    //     }));
    //     res.render('./../app/index.ejs', {reactOutput: generated});
    // })

})
.use(express.static(__dirname + '/../.temp'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
// require('./routes/items.js')(app);
require('./routes/JenkinsD.js')(app);
// require('./routes/JenkinsD.js')(app);

// const https = require('https');
// const options = {
//   hostname: 'https://ustr-hudson-1.na.uis.unisys.com/api/json',
//   path: '/',
//   method: 'GET'
// };
// const req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (e) => {
//   console.error(e);
// });
// req.end();
// var https = require('https');
// https.get('https://ustr-sonar-1.na.uis.unisys.com/api/issue_filters/show/4', (res) => {
//   {console.log('statusCode:', res.statusCode);}
//  {console.log('headers:', res.headers);}

//   res.on('data', (d) => {
//     // process.stdout.write(d);
//     {console.log(d);}
//   });

// }).on('error', (e) => {
//   {console.error(e);}
// });

// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://administrator:administrator@ds121906.mlab.com:21906/dashboard';
// mongoose.connect(mongoDB, {
//   useMongoClient: true
// });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));