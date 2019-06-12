
Thank you for wanting to contribute to Peblio. In this document, you will find instructions for the below -

* [Setup of the project on your system](#setup)
* [Running it in your local environment](#local-development)
* [Running tests!](#tests)
* [The git workflow that we follow](#git-workflow)
* [Deploying](#deploying)
* [How we set it up](#how-we-set-it-up)
* [References](#references)

## Setup

1. Remix this repository.
1. Clone the forked repository and cd into it.
1. Make sure that you have [Node.js v8.7.0 or higher installed](https://github.com/creationix/nvm#installation).
1. ```npm install```
1. (Optional) Install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Developer Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) Chrome extensions.

## Local Development

1. `cd` into project folder and type `npm start`
1. Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Tests

**WIP**

Running `npm test` launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Git Workflow

The expected git workflow for feature development is:

1. Either create a local branch for your feature, **OR**, create a branch for your feature in your fork of the repo.

2. When your work is ready, create a pull request against the `master` branch of this repo and request for a review.

## Deploying

The frontend uses the [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/) to push the latest build to S3 and invalidate the corresponding CloudFront cache.

#### Staging

```
git checkout staging
cd client
./devops/staging_deploy.sh
```

#### Production

```
git checkout master
cd client
./devops/prod_deploy.sh
```


## How we set it up

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## References
* [Setup React and Redux app](https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
