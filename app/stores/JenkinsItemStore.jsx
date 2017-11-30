var dispatcher = require('../dispatcher.js');
var helper = require('../helpers/RestHelper.js');

function JenkinsStore(){
    var items = [{
      
    }];
    var listeners = [];

    helper.get("api/jenkinsD")
    .then(function(data){
        items = data;
        triggerListeners();
    })

function getItems(){
    return items;
}
    function onChange(listener){
listeners.push(listener);
}
    function triggerListeners(){
listeners.forEach(function(listener){
    listener(items)
})
};
function addJenkinsData(item){
    items.push(item);
    triggerListeners();
    helper.post("api/jenkinsD", item);
}
dispatcher.register(function(event){
    var split = event.type.split(':');
    if(split[0] === 'grocery-item'){
        switch(split[1]){
            case "add": 
                addJenkinsData(event.payload);
                break;
        }
    }
});


return {
    getItems: getItems,
    onChange: onChange
}


}

module.exports = new JenkinsStore();