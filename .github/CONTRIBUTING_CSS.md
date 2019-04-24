# Fish Tank CSS Contribution Guide
Please take a few moments to review the following guidelines before contributing component CSS to the Fish Tank Design System Library.

## Writing Your Component Styles
* Styles should be written within the single-file component, in the style block.
* The majority of component will be written using the ```<template>``` block notation, with mininal to no JSX. These components should use the _scoped_ feature on the style block to styles. 
* If the component is written in a manner that leverages JSX, the render() function and complex functional logic, you may use [CSS Modules](https://github.com/css-modules/css-modules) to write your [styles](https://vue-loader.vuejs.org/guide/css-modules.html#usage). Refer to the [CSS Module spec](https://github.com/css-modules/css-modules) for more information.

* Write styles using [_specificity of 10_](https://css-tricks.com/specifics-on-css-specificity/) to target elements
  * Apply styles using class names, and not HTML block elements, to avoid unintended side effects as styles cascade.
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

    .icon {
      color: green;
    }
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

## How to Contribute

The basic workflow is the following:

* [Fork](https://github.com/bloombergbna/fishtank-vue/fork) the repository
* Create a new branch off the `dev` branch. _Do Not Make Changes Directly On Your Forks Dev Branch_.
* Create your new feature or edit code, following our code quality guidelines and format. Commit your changes
* Make a [pull request](https://help.github.com/articles/using-pull-requests) to main project's **dev** branch.
* Always work in a new branch in your fork. Making changes on your fork's `dev` or `master` branch can cause problems later on when trying to merge changes. (See [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/))

## Creating Your Branch
* Use a descriptive title no more than 64 characters long, begining with "feat/". This will be used as the commit message when your PR is merged. 