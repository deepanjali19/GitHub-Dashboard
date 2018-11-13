import React, { Component } from 'react';
import './App.css';

import API from './services/api.js';
import GitHubImage from './img/GitHub-Logo.svg';

class App extends Component {
	
	state = {}

  render() {
		
		const api = new API();
		
		var labels = ['enhancement'];

		api.getIssuesMatchingLabels("deepanjali19", "GitHub-Dashboard", labels)
		.then(function(result){
		   console.log(result);
		})
		.catch(function (error){
		   console.log(error);
		});

    return (
      <div className="App">
        <img src={GitHubImage} width="200" height="100" alt="GitHub Logo" />
        <header className="App-header">
			   	<h2> GitHub-Dashboard </h2>

			 		<input className="github" type="submit" value="Login to Github" />
					
        </header>
      </div>
    );
  }

}

export default App;
