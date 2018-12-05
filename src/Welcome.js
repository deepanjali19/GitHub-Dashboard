import React from 'react';
import WelcomeImage from './img/Octocat.jpg';
import GitHubImage from './img/GitHub.png';

import welcome from './Welcome.css';

const CLIENT_ID = 'c6b85184ff709b73b677'
const REDIRECT_URI = 'http://localhost:3000/Home'

class Welcome extends React.Component {
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
                  </ul>
              </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                          <img src={WelcomeImage} height="380" alt="Welcome" className={welcome.img} />
                        </div>
                        <div className="col-md-7">  
                          <div className={welcome.text}>
                              <h1>Explore your GitHub stats</h1>
                              <p> Track your GitHub activity in detail and watch statistics about your pull requests,
                                  issues, starred and forked repositories. Login to check out the details.
                              </p>
                          </div>
                          <a id="WelGitLink" 
                            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} 
                            target="_blank" 
                            rel="noopener noreferrer">
                              <span> Login with GitHub </span>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
