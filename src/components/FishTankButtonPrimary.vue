<template>
  <fish-tank-base-button
    v-bind="$attrs"
    class="button--primary"
    v-on="$listeners">
    <slot />
  </fish-tank-base-button>
</template>

<script lang="ts">

/**
 * FishTankButtonPrimary
 * @deprecated
 * This component is being deprecated in favor of FishTankButton.
 * It will be removed from the library in October of 2019.
 * FishTankButton offers a more standard and consistant API, and better code quality.
 * Please begin using FishTankButton to avoid any breaking changes.
 */

import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonPrimary",
  components: {
    FishTankBaseButton
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.warn('FishTankButtonPrimary is being deprecated in favor of FishTankButton. It will be removed from the library in October of 2019. Please migrate to FishTankButton.')
  }
})
</script>

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";


  .button--primary {
    background-color: $color-action;
    border-color: $color-action-darkest;
    color: $color-white;

    @include button-box-shadow($color-action);

    &:hover {
      background-color: $color-action-lighter;

    }

    &:active {
      background-color: $color-action-darker;
      box-shadow:none;
    }

    &:disabled {
      opacity: 0.4;

      &:hover {
        background-color: $color-action;
      }
    }

  }

</style>
