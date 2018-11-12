import React, { Component } from 'react';
import './App.css';
import user from './user.js';
class App extends Component {
state = {
	user: {}
}

getUser = () => {
	const name = this.refs.name.value;
	fetch(`http://api.github.com/users/${name}`)
	.then(response => response.json())
	.then(data => {
		this.setState({
			user: {
				name: data.name,
				location: data.location
			}
		})
	})
}

  render() {
  	
const { user } = this.state;

    return (
      <div className="App">
        
        <header className="App-header">
<h2> GitHub-Dashboard </h2>
 		<input class="user" type="text" placeholder="Enter Github Username" ref="name"/>
       	<button  onClick={this.getUser} Get User Details> Login </button>
       <user user={user}/>

 		<form action="https://github.com">
    	<input class="github" type="submit" value="Login on GitHubs Website" />
		</form>

        </header>
      </div>
    );
  }
}

export default App;
