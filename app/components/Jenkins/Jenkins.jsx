var React = require('react');
var createReactClass = require('create-react-class');
var $ = require('jquery');
var helper = require('../../helpers/RestHelper.js');
var action = require('../../action/GroceryItemActionCreator.jsx');

var JenkinsItemStore = require('./../../stores/JenkinsItemStore.jsx');
var JenkinsList = createReactClass({

componentDidMount: function(){
helper.get("/api/jenkinsD").then(function(data){
    console.log(data);
    // console.log(data.jobs);
}).catch(function(err){
    console.log(err);
})

// $.ajax({
//     url:"https://ustr-hudson-1.na.uis.unisys.com/api/json?tree=jobs[name,url,color]",
//     data: 'GET',
//     dataType: 'JSON',
//     success: function(data){
     
//         console.log("Adding Items!", data.jobs);
//           for(var i = 0; i < 10;i++){
//             action.add({
//             name: data.jobs[i].name,
//             url:data.jobs[i].url,
//             color: data.jobs[i].color
//         });
//           }
        
        
    
// console.log("here2" + data.jobs);

//     },
//     error: function(data){
//         console.log(data);
//     }
// })

},
render: function(){
    return(
        <div>
            <h1> Jenkins List Items</h1>
            <div>
                {this.props.items.map(function(item, index){
                    return(
                        <div>
                <h4 >Name: {item.name}</h4>
                <h4>url: {item.url}</h4>

                <h4 >color: {item.color}</h4>


                        </div>
                        )
                })}
            </div>
            {/*<GroceryListAddItems />*/}
        </div>
    )
}

})
module.exports = JenkinsList;

