<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="button--outline button--outline-small"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineSmall",
  introduction: "Small Outline Button",
  description: "Small Outline Button",
  token:[`
    <FishTankButtonOutlineSmall>Filter</FishTankButtonOutlineSmall>
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


