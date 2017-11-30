module.exports = function(app){
    var mongoose = require(mongoose);

    var JenkinsJobConfig = mongoose.model('JenkinsJobConfig');

    app.route('/api/jobConfigHistory')
    .get(function(req, res){
        JenkinsJobConfig.find(function(error, doc){
            res.send(doc);
        });
    })
    .post(function(req, res){
        var item = req.bosy;
        var jobCofig = new JenkinsJobConfig(item);
        jobConfig.save(function(error, doc){
            res.status(300).send();
        })
    })
}