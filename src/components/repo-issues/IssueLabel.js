import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api.js';

class IssueLabel extends React.Component {
  
  constructor() {
    super();
    this.state = { rows: [], labels: [], repoTitle: ''};
  }
  
  async componentDidMount() {
    
    const api = new API();
    
    var labels = ['enhancement', 'documentation'];
    var repoOwner = "deepanjali19";
    var repoName = "GitHub-Dashboard";
    
    const response = await api.getIssuesMatchingLabels(repoOwner, repoName, labels);
    
    this.setState({ repoTitle: repoOwner + "/" + repoName });
    this.setState({ labels: this.createFormattedLabels(labels) });
    this.setState({ rows: this.createRows(response) });
    
  }
  
  createFormattedLabels(labels) {
    
    var formattedLabels = '';
    
    labels.forEach((label) => {
      formattedLabels += label + '  ';
    });
    
    return formattedLabels;
    
  }
  
  createRows(response) {
    
    var rows = [];
    
    rows.push(
      <tr key="0">
        <th>#</th>
        <th>State</th>
        <th>Issue Body</th>
      </tr>
    )
    
    response.forEach((issue, key) => {
      
      var issueNum = issue.payload.issue.number;
      var state = issue.payload.issue.state;
      var body = issue.payload.issue.body;
      
      rows.push(
        <tr key={key + 1}>
          <td>{issueNum}</td>
          <td>{state}</td>
          <td>{body}</td>
        </tr>
      );
      
    });
    
    return rows;
    
  }
  
    render() {
      
      return(
	  		<div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <span id="dashboard">GitHub-Dashboard</span>
                            </a>
                            <a href="#" className="navbar-left"><img src={"https://i.imgur.com/wLD7J0n.png"} height="70" alt="GitHub Logo" /></a>
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
            <h3>Displaying issues in <b>{this.state.repoTitle}</b> that match the following labels:</h3>
            <h4>{this.state.labels}</h4>
          </div>
          <div className="row">
            <div className="col s12 board">
              <table className="table">
                 <tbody>
                   {this.state.rows}
                 </tbody>
               </table>
            </div>
          </div>
        </div>
		</div>
      );

    }

}

export default IssueLabel;