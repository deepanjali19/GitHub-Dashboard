
/*

  This file contains functions that obtain data from Github API
  Each function returns a Promise

  Purpose of these functions is to retrieve the value mentioned 
  in the function title, nothing more

*/


import config from "../config";
import { API_PATH } from "../constants";

const octokit = require('@octokit/rest')()

octokit.authenticate({
  type: 'oauth',
  token: config.access_token
})

export default class API {

  //returns 30 most recent events in given repo
  async getRecentRepoActivity(owner: string, repo: string) {
    const result = await octokit.activity.getEventsForRepo({ owner, repo });
    return result.data;
  }

  //finds 30 most recent events in given repo
  //of those 30, returns those that are issues 
  async getRecentRepoIssues(owner: string, repo: string) {
    const result = await octokit.activity.getEventsForRepo({ owner, repo });
    var issues = [];

    result.data.forEach((repoEvent) => {
      if (repoEvent.type === "IssuesEvent") {
        issues.push(repoEvent);
      }
    });

    return issues;
  }

  //find most recent issues in a given repo
  //returns those issues that match given list of labels
  async getIssuesMatchingLabels(owner: string, repo: string, wantedLabels: array) {
    const issues = await this.getRecentRepoIssues(owner, repo);
    var matches = [];

    issues.forEach((issue) => {

      var labels = issue.payload.issue.labels;
      labels.forEach((label) => {
        if (wantedLabels.includes(label.name)) {
          matches.push(issue);
        }
      })
    });

    return matches;
  }

  // Get list of languages through all repositories
  async getLanguages() {
    let { data } = await octokit.repos.getAll();
    let langs = [];
    for (let { language: name } of data) {
      name = name || 'Unknown';
      let lang = langs.find(e => e.name === name);
      if (!lang) langs.push({ name, count: 1 });
      else lang.count++;
    }

    return langs.sort((a, b) => b.count - a.count);
  }

  // Get basic user information
  async getUserInfo() {
    let { data: { login, avatar_url, created_at } } = await octokit.users.get();
    let { data: { length: nStars } } = await octokit.activity.getStarredRepos();
    let { data: { total_count: nIssues } } = await octokit.search.issues({ q: `type:issue+author:${login}` });
    let { data: { total_count: nPRs } } = await octokit.search.issues({ q: `type:pr+author:${login}` });

    return { avatar_url, created_at, nIssues, nPRs, nStars };
  }
  
  async getUserSummary() {
    let { data: { login, avatar_url } } = await octokit.users.get();
    return { login, avatar_url };
  }
}
