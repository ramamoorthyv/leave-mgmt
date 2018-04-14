import React, { Component } from 'react';

 class ShowList extends Component {

  render() {
    return (
		<ul>
			<li>name as follows</li>
			{this.props.data.map(function(name, index){
                    return <li key={ index }>{name}</li>;
             })}
		</ul>
    );
  }
}

export default ShowList;