# Fishtank Vue

[Fish Tank VueJS Component Module](https://fishtank.bna.com)

## Installation

``` sh
npm install @fishtank/fishtank-vue
```

## Usage

Please reference [https://fishtank.bna.com](https://fishtank.bna.com) for detailed documentation 

### ESM Module

Import the component from the library module
``` js
import { FishTankCard } from @fishtank/fishtank-vue

extend default {
  components:{
    FishTankCard
  }
}
```
### CommonJS Module
Import the component library module, and reference the desired component

``` js
const fishtank = require(“@fishtank-vue”)

extend default {
  components:{
    fishtank.FishTankCard
  }
}
```
OR

``` js
const card = require(“@fishtank-vue”).FishTankCard

extend default {
  components:{
    card
  }
}
```

### Component CSS

Fishtank-vue provides styles are compiled and self-contained within the component itself. There are no additional CSS imports.

## Contributing

[Contributing Documentation](.github/CONTRIBUTING.md)

## Dev Environment Setup

``` bash
# install dependencies
npm install

# or
yarn

# serve with hot reload at localhost:8080
npm run serve 

#or
yarn serve
```
