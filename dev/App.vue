<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../src/styles/variables';
@import '../src/styles/fonts';
@import "~normalize-scss";

@include normalize();

body, html {
  // margin: 0;
  padding: 10px;
  font: 0.75em open sans, arial, sans-serif;
  color: $color-black;
  box-sizing: border-box;
}

html {
  height: 100%;
  font-size: $root-fontsize;
}

// body {
//   min-height: 100%;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   position: relative;
// }

.card-sample-brand-class {
  background-color: #0D3B91;
}

@include declare-webfonts();
</style>
