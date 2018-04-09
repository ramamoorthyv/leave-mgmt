import React, { Component } from 'react';

export default class App extends Component {

  handleSubmit(){
  	
  }

  render() {
    return (
		<div>
		<br/>
			<form model="user">
				<div>
					<span>First Name :</span>
					<input model="user.firstname" type="text" name="firstname" />
				</div>
				<br/>
				<div>
					<span>Last Name :</span>
					<input model="user.lastname" type="text" name="lastname" />
				</div>
				<button onClick={this.handleSubmit}> Submit </button>
			</form>
		</div>
    );
  }
}
