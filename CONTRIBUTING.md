# Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

- Always use our [**bug**](https://github.com/maku85/fake-data-generator/issues/new?assignees=&labels=&template=bug_report.md&title=) or [**feature**](https://github.com/maku85/fake-data-generator/issues/new?assignees=&labels=&template=feature_request.md&title=) templates to create an issue.

## Pull Request Guidelines

- the `master` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch. Please follow this convention for the new branch: `issueNumber-githubUsernaame-commitTitle`.

- make sure `npm run test` passes. (see [**development setup**](#development-setup))

- if adding a new feature:

  - add accompanying test case
  - provide a convincing reason to add this feature

- if fixing bug:
  - follow the branch naming convention mentioned above
  - provide a detailed description of the bug in the PR
  - add appropriate test coverage if applicable

## Development Setup

You will need [**Node.js**](http://nodejs.org) **version 8+**.

After cloning the forked repository, run:

```bash
npm install
```

### Committing Changes

We don't expect any strict convention, but we'd be grateful if you summarize what your modifications content is about when writing a commit.

### Commonly used NPM scripts

```bash
# run unit tests
npm run test
```

There are some other scripts available in the `scripts` section of the `package.json` file.

## Project Structure

- **`lib`**: contains the source code.
- **`test`**: contains all tests. The unit tests are written with [**Chai**](https://www.chaijs.com/) and run using [**Mocha**](https://mochajs.org/).
