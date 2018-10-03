# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.0"></a>
# [3.0.0](https://github.com/bloombergbna/fishtank-vue/compare/v2.0.0...v3.0.0) (2018-10-03)


### Features

* Created button group component ([b42913f](https://github.com/bloombergbna/fishtank-vue/commit/b42913f))
* Fish Tank Button Group component ([5ea0d3b](https://github.com/bloombergbna/fishtank-vue/commit/5ea0d3b))
* Heavy refactor of removeable tags ([3868223](https://github.com/bloombergbna/fishtank-vue/commit/3868223))
* moved accessibility global class script into an external mixin. ([ec7fab4](https://github.com/bloombergbna/fishtank-vue/commit/ec7fab4))
* refactor of original tag supporting refactor work on removable tags. ([5787bc3](https://github.com/bloombergbna/fishtank-vue/commit/5787bc3))
* Unit tests for Button group, and button group button ([909c466](https://github.com/bloombergbna/fishtank-vue/commit/909c466))
* Button Featue Icon now working ([36f18fd](https://github.com/bloombergbna/fishtank-vue/commit/36f18fdfddf798cb91cd2cca4e81c868e9652a35))
* Button Feature Label is now working ([0dd5664](https://github.com/bloombergbna/fishtank-vue/commit/0dd566486828062fca47f095868015f1e1af269d))
* changes added to documentation ([289ec5b](https://github.com/bloombergbna/fishtank-vue/commit/289ec5bb3d498bbe85451784d49d5d46957e99b9))
* added icons to button options using templates and slots ([d0850bf](https://github.com/bloombergbna/fishtank-vue/commit/d0850bf3ad008f9d02b9118b86f0aca803792f95))
* links to mini fab options for FAB using props ([6e33d1f](https://github.com/bloombergbna/fishtank-vue/commit/6e33d1fb332933b88fff0a3e0336d92a949dce6d))
* Developer focused docs for Button Group components ([ceff467](https://github.com/bloombergbna/fishtank-vue/commit/ceff467f9ca71c7d9cceacac4e9b8d802d922c0b))

### BREAKING CHANGES

* update to model binding structure of removeable tags
docs: Created documentation for tags



<a name="2.0.0"></a>
# [2.0.0](https://github.com/bloombergbna/fishtank-vue/compare/v1.1.0...v2.0.0) (2018-09-20)


### Documentation

* Added example images for InputText docs. ([a6ca8e4](https://github.com/bloombergbna/fishtank-vue/commit/a6ca8e4))


### Features

* refactored Checkbox ([fb11849](https://github.com/bloombergbna/fishtank-vue/commit/fb11849))


* Merge pull request #48 from bakpa79/docs/input-text ([ef64817](https://github.com/bloombergbna/fishtank-vue/commit/ef64817)), closes [#48](https://github.com/bloombergbna/fishtank-vue/issues/48)


### BREAKING CHANGES

* Changed bindings in InputCheckbox. use only v-model to bind to model data/variable. Value is now similar to input element value
* Changed bindings in InputCheckbox. use only v-model to bind to model data/variable. Value is now similar to input element value
* refactored binding props for checkboxes



<a name="1.1.0"></a>
# [1.1.0](https://github.com/bloombergbna/fishtank-vue/compare/v1.1.0-beta.0...v1.1.0) (2018-09-14)



<a name="1.1.0-beta.0"></a>
# [1.1.0-beta.0](https://github.com/bloombergbna/fishtank-vue/compare/v0.4.1...v1.1.0-beta.0) (2018-09-13)


### Features

* fixes broken Switch component ([d63acba](https://github.com/bloombergbna/fishtank-vue/commit/d63acba))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/bloombergbna/fishtank-vue/compare/v0.4.0...v0.4.1) (2018-09-12)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/bloombergbna/fishtank-vue/compare/v0.3.2...v0.4.0) (2018-09-11)


### Features

* added vue component gradient button ([bf0dc6c](https://github.com/bloombergbna/fishtank-vue/commit/bf0dc6c))
* Added vue component Outline button, made supporting file changes ([#28](https://github.com/bloombergbna/fishtank-vue/issues/28)) ([150bc43](https://github.com/bloombergbna/fishtank-vue/commit/150bc43))
* Added White Button Vue Component, made the appropiate file changes to support the white button vue component in Buttons.vue, index.ts, and _buttons.scss. Created file components/ButtonWhite.vue -Amirah ([5c60022](https://github.com/bloombergbna/fishtank-vue/commit/5c60022))
* Button Gradient Unit Test and minor changes to Button Gradient component as required of the unit test(changes should not be rolled back as they will run errors in test environment, the component itself continues to run as intended ([58e2ba1](https://github.com/bloombergbna/fishtank-vue/commit/58e2ba1))
* edited gradient button component to take in props for end color, start color, and gradient direction ([29f6ac6](https://github.com/bloombergbna/fishtank-vue/commit/29f6ac6))
* made changes to unit test. Added to test to check gradient button for passed style, linear gradient. ([7610382](https://github.com/bloombergbna/fishtank-vue/commit/7610382))



<a name="0.3.1"></a>
## 0.3.1 (2018-08-16)



<a name="0.3.2"></a>
## 0.3.2 (2018-08-16)


### Bug Fixes

* added .github folder to npm ignore ([d946d83](https://github.com/bloombergbna/fishtank-vue/commit/d946d83))
* Removed InputCheckbox test ([a287115](https://github.com/bloombergbna/fishtank-vue/commit/a287115))
* stop tracking package-lock.json file ([cab1dcd](https://github.com/bloombergbna/fishtank-vue/commit/cab1dcd))
* stop tracking package-lock.json file ([630156c](https://github.com/bloombergbna/fishtank-vue/commit/630156c))


### Features

* Added Checkbox test/review page ([b369e06](https://github.com/bloombergbna/fishtank-vue/commit/b369e06))
* Added Checkbox test/review page ([a3ff979](https://github.com/bloombergbna/fishtank-vue/commit/a3ff979))
* Added InputCheckbox.vue ([f994036](https://github.com/bloombergbna/fishtank-vue/commit/f994036))
* Added issue requests and pull request guideline docs. ([3b29c1b](https://github.com/bloombergbna/fishtank-vue/commit/3b29c1b))
* Added WIP Inpout Switch component ([3b838fd](https://github.com/bloombergbna/fishtank-vue/commit/3b838fd))
* Added WIP Inpout Switch component ([c28afe3](https://github.com/bloombergbna/fishtank-vue/commit/c28afe3))
* Binary. Removeable, and Multiselect tags ([#16](https://github.com/bloombergbna/fishtank-vue/issues/16)) ([f272d49](https://github.com/bloombergbna/fishtank-vue/commit/f272d49))
* radio ([#18](https://github.com/bloombergbna/fishtank-vue/issues/18)) ([930cd0c](https://github.com/bloombergbna/fishtank-vue/commit/930cd0c))
* Removed checkboxes from router ([b510eb6](https://github.com/bloombergbna/fishtank-vue/commit/b510eb6))


### BREAKING CHANGES

* Deleted work in progress checkbox, switch, and tag components



<a name="0.3.1"></a>
## 0.3.1 (2018-08-16)

### Bug Fixes

* added .github folder to npm ignore ([d946d83](https://github.com/bloombergbna/fishtank-vue/commit/d946d83))
* Removed InputCheckbox test ([a287115](https://github.com/bloombergbna/fishtank-vue/commit/a287115))
* stop tracking package-lock.json file ([cab1dcd](https://github.com/bloombergbna/fishtank-vue/commit/cab1dcd))
* stop tracking package-lock.json file ([630156c](https://github.com/bloombergbna/fishtank-vue/commit/630156c))


### Features

* Added Checkbox test/review page ([b369e06](https://github.com/bloombergbna/fishtank-vue/commit/b369e06))
* Added Checkbox test/review page ([a3ff979](https://github.com/bloombergbna/fishtank-vue/commit/a3ff979))
* Added InputCheckbox.vue ([f994036](https://github.com/bloombergbna/fishtank-vue/commit/f994036))
* Added issue requests and pull request guideline docs. ([3b29c1b](https://github.com/bloombergbna/fishtank-vue/commit/3b29c1b))
* Added WIP Inpout Switch component ([3b838fd](https://github.com/bloombergbna/fishtank-vue/commit/3b838fd))
* Added WIP Inpout Switch component ([c28afe3](https://github.com/bloombergbna/fishtank-vue/commit/c28afe3))
* Binary. Removeable, and Multiselect tags ([#16](https://github.com/bloombergbna/fishtank-vue/issues/16)) ([f272d49](https://github.com/bloombergbna/fishtank-vue/commit/f272d49))
* radio ([#18](https://github.com/bloombergbna/fishtank-vue/issues/18)) ([930cd0c](https://github.com/bloombergbna/fishtank-vue/commit/930cd0c))
* Removed checkboxes from router ([b510eb6](https://github.com/bloombergbna/fishtank-vue/commit/b510eb6))


### BREAKING CHANGES

* Deleted work in progress checkbox, switch, and tag components
