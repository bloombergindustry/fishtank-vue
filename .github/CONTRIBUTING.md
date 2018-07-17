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
* Commit your changes
* Make a [pull request](https://help.github.com/articles/using-pull-requests) to **master** branch.
* Always work in a new branch in your fork. Making changes on your fork's `dev` or `master` branch can cause problems later on when trying to merge changes. (See [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/))

### Creating your Branch
* Bug fixes, new features and breaking changes should be submitted to the `dev` branch.
* Use a descriptive title no more than 64 characters long, begining with "feat/". This will be used as the commit message when your PR is merged. 
* For changes and feature requests, please include an example of what you are trying to solve and an example of the markup. It is preferred that you create an issue first however, as that will allow the team to review your proposal before you start.

### Writing your code 
* Components are located in `src/components/`.
* Preview pages with the component are located in `dev/views/`.
* You can add a route to your preview page in dev/router.ts
* Please use SCSS to write you styles for your component, located in `src/styles/components/`.
* Please leverage @fishtank foundational elements for colors, space, typography, and iconography
* Please use BEM style notation to write your styles (http://getbem.com/), scoped to the component. Please preface your class names with “ft-“, i.e. “ft-component-name”. 
* NOTE: We are aiming for specificity “10” for our CSS; this means we want each group of styles ideally written within a single class name attribute, with child elements with their own class name, and avoid nesting styles (except in the case of pseudo class name states like :active or :checked). This is done to allow styles to be scoped without using views “scoped” attribute in the Single File Component.
* Please ensure you written and included passing unit tests for you component. Tests are located in tests/unit/.
* If applicable, Please reference the issue # that the PR resolves, something like `Fixes #1234` or `Resolves #6458` (See [closing issues using keywords](https://help.github.com/articles/closing-issues-using-keywords/))
