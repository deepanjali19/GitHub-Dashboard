//const API_PATH = location.origin + '/api/v1';

import config from "../config";

const octokit = require('@octokit/rest')()

octokit.authenticate({
  type: 'oauth',
  token: config.access_token
})

console.log(config);

export default class API {
  // private readonly locale: Locale.State;
  // private readonly user: User.State;

  constructor(locale: Locale.State, user: User.State) {
    this.locale = locale;
    this.user = user;
  }

}