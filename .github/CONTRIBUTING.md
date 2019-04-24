# FishTank-Vue Contribution Guide
Please take a few moments to review the following guidelines before contributing components to the Fish Tank Design System Library.

## Table Of Contents
  * [How to Contribute](#how-to-contribute)
    * [Creating Your Branch](#creating-your-branch)
    * [Development Setup](#development-setup)
    * [Source Code Setup](#source-code-setup)
    * [Writing Your Component](#writing-your-component)
      * [Minimal Component](#minimal-component)
    * [Writing Your Component Styles](#writing-your-component-styles)
    * [Unit Testing](#unit-testing)
      * [Minimal Unit Test](#minimal-unit-test)
      * [Running Tests](#running-tests)
    * [Writing Your Commit & Creating Pull Requests](#writing-your-commit-&-creating-pull-requests)

## How to Contribute

The basic workflow is the following:

* [Fork](https://github.com/bloombergbna/fishtank-vue/fork) the repository
* Create a new branch off the `dev` branch. _Do Not Make Changes Directly On Your Forks Dev Branch_.
* Create your new feature or edit code, following our code quality guidelines and format. Commit your changes
* Make a [pull request](https://help.github.com/articles/using-pull-requests) to main project's **dev** branch.
* Always work in a new branch in your fork. Making changes on your fork's `dev` or `master` branch can cause problems later on when trying to merge changes. (See [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/))

### Creating Your Branch
* Use a descriptive title no more than 64 characters long, begining with "feat/". This will be used as the commit message when your PR is merged. 

### Development Setup
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
* Preview Pages for each component are located in `dev/views/`.
* Unit tests are located in `src/test/unit/`.

### Writing your component
* You can add a route to your preview page in `dev/router.ts`
* Please title each component in UpperCamelCase. _Please reference the [Vue Style Guide](https://vuejs.org/v2/style-guide/) for best practices in building components._

#### Minimal Component
in src/components/MyComponent.vue
```html
<template>
  <my-component />
</template>
<script lang="ts">
export default Vue.extend({
  name: 'MyCompoment'
})
</script>
<style scoped lang="scss">
</style>
```

### Unit Testing
Read our [testing guidelines](TESTING.md)

#### Minimal Unit Test
in test/unit/MyComponent.spec.ts
```js
import { mount } from '@vue/test-utils'
import MyComponent from 'components/MyComponent.vue'

describe('MyComponent.vue', () => {
  it('renders without issues', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.html()).to.equal('<div></div>')
  })
})
```

#### Running Tests
Please ensure you written and included passing unit tests for you component. Tests are located in tests/unit/, and are written in [Chai](http://www.chaijs.com/).

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

### Writing Your Commit & Creating Pull Requests
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