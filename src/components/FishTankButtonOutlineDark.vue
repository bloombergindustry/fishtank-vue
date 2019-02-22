<template>
  <fish-tank-base-button
    v-bind="$attrs"
    class="button--outline-dark"
    v-on="$listeners">
    <slot />
  </fish-tank-base-button>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineDark",
  components: {
    FishTankBaseButton
  }
})
</script>

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--outline-dark {
    background-color: transparent;
    border-color: $color-white;
    border-width: 2px;
    color: $color-white;

    &:hover {
      color: $color-gray-dark;
      background-color: $color-white;
    }
    &:disabled {
      color: $color-gray-dark;
      border-color: $color-gray-dark;

      &:hover{
        background-color: transparent;
      }
    }
    &:active {
      background-color: $color-secondary-darker;
      border-color: $color-secondary-darker;
    }
  }

</style>
