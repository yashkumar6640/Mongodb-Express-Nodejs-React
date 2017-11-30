var React = require('react');
var createReactClass = require('create-react-class');
 
var GroceryItem = require('./GroceryItem.jsx');
var groceryItemStore = require('./../stores/GroceryItemStore.jsx');
var GroceryListAddItems = require('./GroceryListAddItems.jsx');
var GroceryItemList = createReactClass({

render: function(){
    return(
        <div>
            <h1> Grocery List Items</h1>
            <div>
                {this.props.items.map(function(item, index){
                    return(
                        <GroceryItem key={"item" + index} item = {item} />
                        )
                })}
            </div>
            <GroceryListAddItems />
        </div>
    )
}

})
module.exports = GroceryItemList;

