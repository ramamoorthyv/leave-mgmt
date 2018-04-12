import React, { Component } from 'react';
var axios = require('axios');

 class Listuser extends Component {

  constructor(){
    super();
    this.state = {
      names: []
    };    
  }

  handleSubmit(){  	
  }

  componentDidMount() {
  	// this.state = {
  	// 	names: ['ramamoorthy','villithevar','vishnu']
  	// }
  	var self = this;
  	axios.get('names.json')
    .then(function (response) {
    	console.log(response.data);
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
  	var names = this.state.names
  	console.log(names);
    return (
		<div>
			<ul>
				{names.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
			</ul>
		</div>
    );
  }
}
//https://jsonplaceholder.typicode.com/users

export default Listuser;