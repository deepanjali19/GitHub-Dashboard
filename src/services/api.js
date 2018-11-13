import config from "../config";
import { API_PATH } from "../constants";

const octokit = require('@octokit/rest')()


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