import React from 'react';

import API from './services/api.js';

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
      );

    }

}

export default IssueLabel;