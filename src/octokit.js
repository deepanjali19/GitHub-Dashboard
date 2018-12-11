const octokit = require('@octokit/rest')()
 
octokit.repos.getForOrg({
  org: 'octokit',
  type: 'public'
}).then(({ data, headers, status }) => {

})

const octokit = require('@octokit/rest')({
  timeout: 0, 
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': 'octokit/rest.js v1.2.3'
  },
 
  // custom GitHub Enterprise URL
  baseUrl: 'https://github.com/deepanjali19/GitHub-Dashboard',
 
  agent: undefined
})

async function paginate(method) {
    let response = await method({
        owner: "google",
        repo: "gson",
        state: "all",
        per_page: 100
    })
    let {
        data
    } = response
    var count = 0;
    while (octokit.hasNextPage(response)) {
        count++;
        console.log(`${count} request`);
        response = await octokit.getNextPage(response)
        data = data.concat(response.data)
    }
    return data
}

paginate(octokit.issues.getForRepo)
    .then(data => {
        console.log(data);
    })

octokit.authenticate({
    type: 'oauth',
    token: 'YOUR_TOKEN'
});

async function paginate(method) {
    let response = await method({
        q: "repo:google/gson is:issue",
        per_page: 100
    })
    let data = response.data.items;
    var count = 0;
    while (octokit.hasNextPage(response)) {
        count++;
        console.log(`request n°${count}`);
        response = await octokit.getNextPage(response);
        data = data.concat(response.data.items);
    }
    return data
}

paginate(octokit.search.issues)
    .then(data => {
        console.log(data);
        console.log(`retrieved ${data.length} issues`);
    })

