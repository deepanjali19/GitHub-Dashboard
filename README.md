# GitHub-Dashboard
A web based GitHub Dashboard for Seneca students working on Open Source Development.

This app tracks the user activities on GitHub and presents the statistics of the following:

- Issues
- Pull Requests
- Starred Repositories
- Forked Repositories

It also shows recommendations for future projects and bugs, the user can work on.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Installing

[Fork](https://help.github.com/articles/fork-a-repo/) and [clone](https://help.github.com/articles/cloning-a-repository/) the repository onto your computer.

[Generate a github API access_token](https://github.com/settings/tokens) with repo permissions (but generate a new key with more permissions if the situation calls for it) and put that key in `config.json`. Then run the following commands to get the app working locally on your machine:

```
npm install
npm start
```

This will build the project and automatically start the development server on [http://localhost:3000](http://localhost:3000).

## Contributing

New contributors are always welcome!

Need to contact other collaborators in this project? Feel free to [join our slack group!](https://join.slack.com/t/githubdashboard/shared_invite/enQtNDcxMTM5OTMyNjExLWFmYTE1NTFiMzkyMzU0ZmRjMjI0YjI1OTVkMDk0MTUyZmJlMjM2NGUzODQ1YjZmZDVkMzkxYzgzYjM1MjI1ZGI) 

## Liscense

This project is licensed under the MIT License - see our [LICENSE.md](https://github.com/deepanjali19/GitHub-Dashboard/blob/master/LICENSE) file for details

## V1 Features
A list of features we want to have completed for this first version of the project. If you think of anything feel free to add it, or bring up any concerns about existing features in our [slack](https://githubdashboard.slack.com) group or in a new [issue](https://github.com/deepanjali19/GitHub-Dashboard/issues/new).

### General Features
More general features present throughout the application

- Create 'Log in through github' feature
- Create means of interacting with API

### Components 
Each of these features below will be in a separate component added to the dashboard (e.g. a graph component that displays PRs over time)

- Display issues that match given labels for a repo the user is interested in 
- List most recent activity for a repo the user is interested in
- Display issue with least amount of comments/most amount of comments in a given repo
- Display and list comments related to recent pull request/issue a user has made
- Display the user's recent activity in a list
- Display total number of stars for all the user's repos
- a list of issues the user is currently working on
- a pie chart showing a distribution of languages the user worked with based off the repositories they have
- a simple list of languages the user has used

### Developer Priorities
Nice to haves that would benefit the development of the project

- Create page mock-ups for front end
- Set up testing environment
- Make site responsive
