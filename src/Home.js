import React from 'react';
import GitHubImage from './img/GitHub.png';
import { Link } from 'react-router-dom';
import UserSummary from './components/user-summary/UserSummary';

//const CLIENT_ID = 'c6b85184ff709b73b677'
//const REDIRECT_URI = 'http://localhost:3000/'

class Home extends React.Component {
    render() {
        return (
          
            <div>
                <nav>                  
                    <ul className="navbar">
                        <li className="nav-brand">
                          <a href="#">
                            <span >GitHub Dashboard</span>
                            <img className="logo" src={GitHubImage} alt="GitHub Logo" />
                          </a>
                        </li>
                        <li className="nav-links">
                          <li>
                            <Link to="/Home">Home</Link>
                          </li>
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
                        </li>
                        <li className="nav-user-summary pull-right">
                          <UserSummary />
                        </li>
                    </ul>
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
