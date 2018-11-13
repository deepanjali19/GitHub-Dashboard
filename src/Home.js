import React from 'react';
import GitHubImage from './img/GitHub.png';
import './Home.css';
import { Link } from 'react-router-dom';

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
                            <a href="#" class="navbar-left"><img src={GitHubImage} height="70" alt="GitHub Logo" /></a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Features
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/CurrentIssues">CurrentIssues</Link></li>
                                    <li><Link to="/IssueCommentAmount">IssueCommentAmount</Link></li>
                                    <li><Link to="/IssueLabel">IssueLabel</Link></li>
                                    <li><Link to="/LanguageList">LanguageList</Link></li>
                                    <li><Link to="/PieChart">PieChart</Link></li>
                                    <li><Link to="/RelatingComments">RelatingComments</Link></li>
                                    <li><Link to="/RepoRecentActivity">RepoRecentActivity</Link></li>
                                    <li><Link to="/TotalStars">TotalStars</Link></li>
                                    <li><Link to="/UserRecentActivities">UserRecentActivities</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><span class="glyphicon glyphicon-log-in"></span> Login to GitHub</a></li>
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
