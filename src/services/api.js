//const API_PATH = location.origin + '/api/v1';

import config from "../config";

const octokit = require('@octokit/rest')()

const API_PATH = "https://api.github.com/";

octokit.authenticate({
  type: 'oauth',
  token: config.access_token
})

export default class API {

  constructor() {

  }
  
  async getRecentRepoActivity(owner: string, repo:string) {
    // return this.fetch(`${API_PATH}/skipped_sentences/` + id, {
    //   method: 'POST',
    // });
    const result = await octokit.activity.getEventsForRepo({owner, repo})
    console.log(result);
  }
  
  
  //get most recent activity for user.

}