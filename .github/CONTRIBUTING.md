# FishTank-Vue Contributing Guide
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
* For changes and feature requests, please include an example of what you are trying to solve and an example of the markup. It is preferred that you create an issue first however, as that will allow the team to ingest and review your proposal before or as you start.

### Development Setup
_If your on a Mac you will need [Yarn](https://yarnpkg.com/lang/en/) before continuing._

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

### Writing Your Component Styles
* Styles should be written within the single-file component, in the style block. 
* If the component is written in a manner that leverages JSX and the render() function, you may use [CSS Modules](https://github.com/css-modules/css-modules) to write your [styles](https://vue-loader.vuejs.org/guide/css-modules.html#usage). Refer to the [CSS Module spec](https://github.com/css-modules/css-modules) for more information.
* However, the majority of component will be written using the ```<template>``` block notation, with mininal to no JSX. These componentsshould use the _scoped_ feature on the style block to styles.
* Write styles using [_specificity of 10_](https://css-tricks.com/specifics-on-css-specificity/) to target elements
  * Target class names, not HTML block elements to avoid unintended css side effects
  * To improve organization and readability, when using SCSS/SASS/LESS, avoid nesting classes more than 1 level. However use nesting to target element pseudo states like _:focus_, _:hover_, _:checked_,  etc.
  * Consider using simple, readable class names, using _scoped_ or CSS Modules functionality resolves the need to namespace or use BEM notation for class names
  ```scss
  // Bad
  .element-name {
    background-color:red;

    .element-name-input{
      background-color: blue;
    }
  }

  // Good
  .element-name {
    background-color:red;

    .input {
      background-color: blue;
    }
  }


  // Best
  .element-name {
    background-color:red;
  }
  .input {
    background-color: blue
  }
  ```
* Please leverage @fishtank foundational elements for: 
  * [colors](https://www.npmjs.com/package/@fishtank/colors) - [github](https://github.com/bloombergbna/fishtank-colors)
  * [space](https://www.npmjs.com/package/@fishtank/space) - [github](https://github.com/bloombergbna/fishtank-space)
  * [typography](https://www.npmjs.com/package/@fishtank/type) - [github](https://github.com/bloombergbna/fishtank-type)
  * [iconography](https://www.npmjs.com/package/@fishtank/icons) - [github](https://github.com/bloombergbna/fishtank-icons)
* You are free to use SCSS to compile your styles. 
  * _PLEASE NOTE: We are aiming for specificity “10” for our CSS; this means we want each group of styles ideally written within a single class name attribute, with child elements with their own class name, and avoid nesting styles (except in the case of pseudo class name states like :active, :hover, :visited, :checked, etc)._
* Avoid styling block level elements; styles should be applied using class names

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