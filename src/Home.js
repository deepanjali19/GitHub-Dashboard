import React from 'react';
import GitHubImage from './img/GitHub.png';
import './Home.css';
import { Link } from 'react-router-dom';

//const CLIENT_ID = 'c6b85184ff709b73b677'
//const REDIRECT_URI = 'http://localhost:3000/'

class Home extends React.Component {
    render() {
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

                        <div className="col-md-4">

                        <script src="\src\components\lang-list\LanguageList.js"></script>
                        
                        </div>

                        <div className="col-md-4">

                        <script src="\src\components\top-lang\TopLanguage.js"></script>

                        </div>

                        <div className="col-md-4">

                        <script src="src\components\user-info\UserOverview.js"></script>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
