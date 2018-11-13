import React, { Component } from 'react';
import './App.css';

import API from './services/api.js';
import GitHubImage from './img/GitHub-Logo.svg';

class App extends Component {
	
	state = {}

  render() {
  	
		const { user } = this.state;

    return (
      <div className="App">
        <img src={GitHubImage} width="200" height="100" alt="GitHub Logo" />
        <header className="App-header">
			   	<h2> GitHub-Dashboard </h2>

			 		<form action="https://github.com">
			    	<input className="github" type="submit" value="Login on GitHubs Website" />
					</form>
					
        </header>
      </div>
    );
  }

}

export default App;
