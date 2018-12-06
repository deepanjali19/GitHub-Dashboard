import React from 'react';
import GitHubImage from './img/GitHub.png';
import './Home.css';
import { Link } from 'react-router-dom';
import API from './services/api'

//const CLIENT_ID = 'c6b85184ff709b73b677'
//const REDIRECT_URI = 'http://localhost:3000/'

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let api = new API();
        let code = window.location.href.split("=")[1];
        let p = api.getToken(code).then((response)=>{console.log(response);});
        
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <span id="dashboard">GitHub-Dashboard</span>
                            </a>
                            <a href="#" className="navbar-left"><img src={GitHubImage} height="70" alt="GitHub Logo" /></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/Home">Home</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Features
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/IssueLabel">IssueLabel</Link></li>
                                    <li><Link to="/LanguageList">LanguageList</Link></li>
                                    <li><Link to="/PieChart">PieChart</Link></li>
                                    <li><Link to="/RepoRecentActivity">RepoRecentActivity</Link></li>
                                    <li><Link to="/UserRecentActivities">UserRecentActivities</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                        </div>

                        <div className="col-md-6">
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
