<template>
  <fish-tank-base-button
    v-bind="$attrs"
    class="button--white"
    v-on="$listeners">
    <slot />
  </fish-tank-base-button>
</template>

<script lang="ts">
/**
 * FishTankButtonSecondary
 * @deprecated
 * This component is being deprecated in favor of FishTankButton.
 * It will be removed from the library in October of 2019.
 * FishTankButton offers a more standard and consistant API, and better code quality.
 * Please begin using FishTankButton to avoid any breaking changes.
 */
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonWhite",
  components: {
    FishTankBaseButton
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.warn('FishTankButtonWhite is being deprecated in favor of FishTankButton. It will be removed from the library in October of 2019. Please migrate to FishTankButton.')
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
