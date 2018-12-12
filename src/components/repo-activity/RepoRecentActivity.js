import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar'
class RepoRecentActivity extends React.Component {
    render() {
        return(
		<div>
             <NavBar />   
            <h1>List most recent activity for a repo the user is interested in</h1>
		</div>
        );
    }
}

export default RepoRecentActivity;