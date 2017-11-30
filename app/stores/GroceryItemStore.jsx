var dispatcher = require('../dispatcher.js');
var helper = require('../helpers/RestHelper.js');


function GroceryItemStore(){
var items = [{
    name: 'icecream'
}, {
    name: 'Waffles'
}, {
    name: 'Candy',
    purchased: true
}, {
    name: 'Snacks'
}];
var listeners = [];


helper.get("api/items")
.then(function(data){
    items = data;
    triggerListeners();

})


function getItems(){
    return items;
}
function addGroceryItem(item){
    items.push(item);
    triggerListeners();
    helper.post("api/items", item);
}
function onChange(listener){
listeners.push(listener);
}

function triggerListeners(){
listeners.forEach(function(listener){
    listener(items)
})
};

dispatcher.register(function(event){
    var split = event.type.split(':');
    if(split[0] === 'grocery-item'){
        switch(split[1]){
            case "add": 
                addGroceryItem(event.payload);
                break;
        }
    }
});

return {
    getItems: getItems,
    onChange: onChange
}



}

// module.exports = new GroceryItemStore();