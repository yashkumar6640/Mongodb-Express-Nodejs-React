var React = require('react');
var createReactClass = require('create-react-class');

var GroceryItem = createReactClass({

    render: function(){
        return(
            <div> 
                <h4 className = {this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>

                </div>
        )
    }
})

module.exports = GroceryItem;
