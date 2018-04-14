import React, { Component } from 'react';
import List from './show_list';
import Userform from './user_form';
var axios = require('axios');

 class Listuser extends Component {

  constructor(){
    super();
    this.state = {
      names: []
    };    
  }

  // handleSubmit(values){  	
  // 	console.log('The result is ');
  // 	console.log(values);
  // }

  handleSubmit = (values) => {
    // Do something with the form values
    //console.log(values);
    axios.get('response/user.json',values).then(function(response){
    	console.log(response.data)
    });
  }

  componentDidMount() {
  	// this.state = {
  	// 	names: ['ramamoorthy','villithevar','vishnu']
  	// }
  	var self = this;
  	axios.get('response/names.json')
    .then(function (response) {
    	//console.log(response.data);
      self.setState({
        names: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
  	//var names = ['Jake', 'Jon', 'Thruster'];
  	console.log(this.state.names);
    return (
		<div>
		<br/>
		   <div><Userform onSubmit={this.handleSubmit} /></div>
		   <br/>
			<ul>
				<List data={this.state.names} />
			</ul>
		</div>
    );
  }
}
//https://jsonplaceholder.typicode.com/users

export default Listuser;