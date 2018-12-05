import React, { Component } from 'react';


import { Route, Switch } from 'react-router-dom'
import Welcome from './Welcome';
import Home from './Home';
import IssueLabel from './components/repo-issues/IssueLabel';
import LanguageList from './components/lang-list/LanguageList';
import TopLanguage from './components/top-lang/TopLanguage';
import PieChart from './components/pie-chart/PieChart';
import RepoRecentActivity from './components/repo-activity/RepoRecentActivity';
import UserRecentActivities from './components/user-activity/UserRecentActivities';
import UserOverview from './components/user-info/UserOverview';

class App extends Component {
	
	state = {}
	componentDidMount() {
        const code =
		window.location.href.match(/\?code=(.*)/) &&
		window.location.href.match(/\?code=(.*)/)[1];
        
      }
  render() {
		
		return (
			<Switch>
				<Route exact path='/' render={() => (
					<Welcome />
				)} />
				<Route exact path='/Home' render={() => (
					<Home />
				)} />
				<Route exact path='/IssueLabel' render={() => (
					<IssueLabel />
				)} />
				<Route exact path='/LanguageList' render={() => (
					<LanguageList />
				)} />
				<Route exact path='/TopLanguage' render={() => (
					<TopLanguage />
				)} />
				<Route exact path='/PieChart' render={() => (
					<PieChart />
				)} />
				<Route exact path='/RepoRecentActivity' render={() => (
					<RepoRecentActivity />
				)} />
				<Route exact path='/UserRecentActivities' render={() => (
					<UserRecentActivities />
				)} />
				<Route exact path='/UserOverview' render={() => (
					<UserOverview />
				)} />
				<Route render={() => (
						<h1>Not Found</h1>
				)} />
			</Switch>
		);
	}
}

export default App;
