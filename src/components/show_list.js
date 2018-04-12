import React, { Component } from 'react';

 class ShowList extends Component {

  render() {
    return (
		<ul>
			<li>name as follows</li>
			{this.props.list.map(function(name){
				<li>{name}</li>
			})}
		</ul>
    );
  }
}

export default ShowList;