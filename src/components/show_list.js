import React, { Component } from 'react';

 class ShowList extends Component {

  // showDetail => selecteduser => {
  // 	console.log(selecteduser)
  // }	

  showDetail(selecteduser){
  	console.log(selecteduser)
  }

  render() {
  
    return (
		<ul>
			
			{this.props.data.map(function(user, index){
                  return <li key={index}>{user.firstName}</li>;
             })}
		</ul>
    );
  }
}

export default ShowList;