<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="button--outline"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutline",
  introduction: "Outline Button",
  description: "Outline Button",
  token:[`
    <FishTankButtonOutline>Filter</FishTankButtonOutline>
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
  background-color: $color-white;
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

</style>

