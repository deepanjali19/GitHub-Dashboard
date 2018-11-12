import React, { Component } from 'react';

class user extends Component{

	render(){
		const { user } = this.props
		return(
			<div> 
			<h4> User Details</h4>
			<h4>{user.name}</h4>
			<h4>{user.location}</h4>
			</div>
)
		}
	}

export default user;