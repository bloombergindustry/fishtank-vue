# Fishtank-vue Contributing Guide
Hello and thank you for interest in helping make Fishtank-Vue better. Please take a few moments to review the following guidelines.

## Reporting Issues
* The issue list of this repo is <strong>exclusively</strong> for bug reports and feature requests. Non-conforming issues will be closed immediately.
* Try to search for your issue, it may have been answered.
* See if the error is reproduceable with the latest version.
* If reproduceable, please provide a [simple codepen](https://codepen.io) or repository that can be cloned to produce the expected behavior. It is preferred that you create an initial commit with no changes first, then another one that will cause the issue. 
* **Never** comment "+1" or "me too!" on issues without leaving additional information, use the :+1: button in the top right instead.

## How to Contribute

The basic workflow when making contributions is the following:

* [Fork](https://github.com/bloombergbna/fishtank-vue/fork) the repository
* Create a branch off of the `dev` branch. _Do Not Make Changes Directly On Your Forks Dev Branch_.
* Create your new feature of edit code. Commit your changes
* Make a [pull request](https://help.github.com/articles/using-pull-requests) to main project's **dev** branch.
* Always work in a new branch in your fork. Making changes on your fork's `dev` or `master` branch can cause problems later on when trying to merge changes. (See [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/))

### Creating your Branch
* Use a descriptive title no more than 64 characters long, begining with "feat/". This will be used as the commit message when your PR is merged. 
* For changes and feature requests, please include an example of what you are trying to solve and an example of the markup. It is preferred that you create an issue first however, as that will allow the team to ingest and review your proposal before or as you start.

### Development Setup
You will need [Yarn](https://yarnpkg.com/lang/en/) before continuing.

Clone this repository and run the following commands to build the project.
``` sh
$ yarn install 
# or
$ npm install

$ yarn serve
# or
$ npm run serve
```

### Source Code Setup
* Individual Vue components are located in `src/components/`.
* Individual component styles are located in `src/styles/components/`.
* Preview Pages for each component are located in `dev/views/`.
* Unit tests are located in `src/test/unit/`.

### Writing your code
* You can add a route to your preview page in dev/router.ts
* Please title each component in UpperCamelCase. Please reference the [Vue Style Guide](https://vuejs.org/v2/style-guide/) for best practices in building components.
* Please use SCSS to write you styles for your component, located in `src/styles/components/`.
* Please leverage @fishtank foundational elements for [colors](https://github.com/bloombergbna/fishtank-colors), [space](https://github.com/bloombergbna/fishtank-space), [typography](https://github.com/bloombergbna/fishtank-type), and [iconography](https://github.com/bloombergbna/fishtank-icons)
* Please use [BEM style notation](http://getbem.com/) to write your styles, scoped to the component. Please preface your class names with _“ft-“_, i.e. _“ft-component-name”_. 
* NOTE: We are aiming for specificity “10” for our CSS; this means we want each group of styles ideally written within a single class name attribute, with child elements with their own class name, and avoid nesting styles (except in the case of pseudo class name states like :active or :checked). This is done to allow styles to be scoped without using views “scoped” attribute in the Single File Component.
* Please ensure you written and included passing unit tests for you component. Tests are located in tests/unit/, and are written in [Chai](http://www.chaijs.com/).

### Running tests
Fishtank-Vue has unit tests written in [Chai](http://www.chaijs.com/). 
Use the following command to run tests: 
```sh
  $ yarn test
  # or
  $ npm run test
```

Use the following command to run the es-linter: 
```sh
  $ yarn lint
  # or
  $ npm run lint
```

### Writing your commit & creating pull requests
* Please use the [Conventional Commits](https://conventionalcommits.org/) format to title and create your commits. Some example types are:
  * feat: A new feature
  * fix: A bug fix
  * docs: Documentation only changes
  * style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  * refactor: A code change that neither fixes a bug or adds a feature
  * perf: A code change that improves performance
  * test: Adding missing tests
  * chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

* If applicable, Please reference the issue # that the PR resolves, something like `Fixes #1234` or `Resolves #6458` (See [closing issues using keywords](https://help.github.com/articles/closing-issues-using-keywords/))