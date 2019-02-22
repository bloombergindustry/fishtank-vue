<template>
  <fish-tank-base-button
    v-bind="$attrs"
    class="button--secondary"
    v-on="$listeners">
    <slot />
  </fish-tank-base-button>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonSecondary",
  introduction: "Secondary Button",
  description: "Secondary Button",
  token:[`
    <FishTankButtonSecondary>Options</FishTankButtonSecondary>
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

  .button--secondary {
    background-color: $color-secondary;
    border-color: $color-gray-lighter;
    color: $color-gray-dark;
    font-weight: $fontweight-regular;

    box-shadow: inset 0 -1px 0 0px rgba(black,0.08),
                inset 0 1px 0 0px rgba(white,0.5),
                0 3px 1px -2px rgba($color-secondary,0.5),
                0 4px 3px -2px rgba(black,0.15);

    &:hover {
      background-color: $color-secondary-lighter;
      color: $color-black;
      box-shadow: inset 0 -1px 0 0px rgba(black,0.08),
                  inset 0 1px 0 0px rgba(white,0.5),
                  0 3px 1px -2px rgba($color-secondary,0.6),
                  0 4px 3px -2px rgba(black,0.2);
    }

    &:active {
      background-color: $color-secondary-darker;
      box-shadow:none;
    }

    &:disabled {
      color: $color-disabled;
      border-color: $color-gray-lighter;
      background-color: $color-secondary;
      box-shadow: none;

      &:hover {
        background-color: $color-secondary;
      }
    }
  }

</style>

