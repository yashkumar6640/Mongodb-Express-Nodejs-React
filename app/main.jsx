var React = require('react');
var ReactDOM = require('react-dom')
console.log("Hello from JSX");


var GroceryItemList =require('./components/GroceryItemList.jsx');
var Jenkins = require('./components/Jenkins/Jenkins.jsx');
var JenkinsItemStore = require('./stores/JenkinsItemStore.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = JenkinsItemStore.getItems();
    console.log("here3" + initial);

// function render(){
// ReactDOM.render(<GroceryItemList items = {initial} />, document.getElementById('app'));
// }
// groceryItemStore.onChange(function(items){
//     initial = items;

//     render();
// })
// render();
function render(){
ReactDOM.render(<Jenkins items={initial} />, document.getElementById('app'));
}
JenkinsItemStore.onChange(function(items){
    initial = items;
    render();

})

render();