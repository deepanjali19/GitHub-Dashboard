import React from 'react';
import WelcomeImage from './img/Octocat.jpg';
import WelcomeLogo from './img/WelcomeLogo.png';
import './Welcome.css';

const CLIENT_ID = 'c6b85184ff709b73b677'
const REDIRECT_URI = 'http://localhost:3000/Home'

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <nav className="welcome-navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="welcome-navbar-header">
                            <a href="#" className="navbar-left"><img src={WelcomeLogo} height="40" alt="Welcome Logo" /></a>
                            <a className="navbar-brand" href="#">
                                <span id="welcome-dashboard">GitHub-Dashboard</span>
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="welcome-container">
                    <div className="welcome-row">
                        <img src={WelcomeImage} height="380" alt="Welcome" className="welcome-img" />
                        <div className="welcome-text">
                            <h3>Explore your GitHub stats</h3>
                            <p> Track your GitHub activity in detail and watch statistics about your pull requests, <br></br>
                                issues, starred and forked repositories. Login to check out the details.
                        </p><br></br>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><a id="WelGitLink" href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} target="_blank" rel="noopener noreferrer"><span className="glyphicon glyphicon-log-in"></span> Login to GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
