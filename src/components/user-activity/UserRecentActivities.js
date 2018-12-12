import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar'
//const CLIENT_ID = 'c6b85184ff709b73b677'
//const REDIRECT_URI = 'http://localhost:3000/'
class UserRecentActivities extends React.Component {
	
	
    render() {
        return(
		<div>
            <NavBar />
            <h1>Display the user's recent activity in a list</h1>
		</div>
        );
    }
}

export default UserRecentActivities;