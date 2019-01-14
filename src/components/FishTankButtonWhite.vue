<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="button--white"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonWhite",
  introduction: "White Button",
  description: "White Button",
  token:[`
    <FishTankButtonWhite>Filter</FishTankButtonWhite>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>

<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--white {
    background-color: $color-white;
    border-color: $color-gray-lightest;
    color: $color-gray;

    @include button-box-shadow($color-white);

    &:hover {
      color: $color-black;
    }

    &:active {
      background-color: $color-gray-lightest;
      box-shadow: none;
    }
    &:disabled {
      opacity: 0.4;

      &:hover {
        background-color: $color-disabled;
        color: $color-gray-lighter;
      }
    }
  }

</style>
