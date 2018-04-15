import React, { Component } from 'react';
import List from './show_list';
import Userform from './user_form';
import { connect } from 'react-redux';

const createUser = (user) => {
    return {
      type: 'CREATE_NEW_USER',
      user: user
    }
  };


var axios = require('axios');

 class Listuser extends Component {

  constructor(){
    super();
    this.state = {
      names: [],
      message:''
    };    
  }

  // handleSubmit(values){  	
  // 	console.log('The result is ');
  // 	console.log(values);
  // }

  handleSubmit = (values) => {
    // Do something with the form values
    //console.log(values);
    var self = this;
    this.props.createUser(values);
    // axios.get('response/user.json',values).then(function(response){
    // 	//console.log(response.data)
    // 	self.setState({message:'User added'});
    // });
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
  	console.log(this.state.message);
    return (
		<div>
		<br/>
		   <div><Userform onSubmit={this.handleSubmit} /></div>
		   <br/>
		   <span>{this.state.message}</span>
			<ul>
				<List  data={this.props.users1} />
			</ul>
		</div>
    );
  }
}
//https://jsonplaceholder.typicode.com/users


const mapStateToProps = (state, ownProps) => {
  return {
    users1: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(createUser(user))
  }
};


//export default Listuser;
export default connect(mapStateToProps, mapDispatchToProps)(Listuser);