<template>
  <fish-tank-base-button
    v-bind="$attrs"
    class="button--outline button--outline-small"
    v-on="$listeners">
    <slot />
  </fish-tank-base-button>
</template>

<script lang="ts">
/**
 * FishTankButtonOutlineDarkSmall
 * @deprecated
 * This component is being deprecated in favor of FishTankButton.
 * It will be removed from the library in October 2019.
 * FishTankButton offers a more standard and consistant API, and better code quality.
 * Please begin using FishTankButton to avoid any breaking changes.
 */
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineSmall",
  components: {
    FishTankBaseButton
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.warn('FishTankButtonOutlineSmall is being deprecated in favor of FishTankButton. It will be removed from the library in October 2019. Please migrate to FishTankButton.')
  }
})
</script>


<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--outline {
    background-color: transparent;
    border-color: $color-gray;
    border-width: 2px;
    color: $color-gray;

    &:hover {
      color: $color-white;
      background-color: $color-gray;
    }
    &:disabled {
      color: $color-gray-lighter;
      border-color: $color-gray-lighter;

      &:hover {
        background-color: transparent;

      }
    }
    &:active {
      background-color: $color-gray-dark;
      border-color: $color-gray-dark;
    }
  }

  .button--outline-small{
    height: 24px;
    border-width: 1px;
    padding: 1px 8px 2px 8px;
    line-height: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.1px;
    text-align: center;
  }

</style>


