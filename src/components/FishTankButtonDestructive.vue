<template>
  <FishTankBaseButton 
    v-bind="$attrs"
    class="button--destructive"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonDestructive",
  introduction: "Destructive Button",
  description: "Destructive Button",
  token:[`
    <FishTankButtonDestructive>Delete</FishTankButtonDestructive>
  `],
  components: {
    FishTankBaseButton
  },
})
</script>

<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--destructive {
    background-color: $color-error;
    border-color: $color-error-darkest;
    color: $color-white;

    @include button-box-shadow($color-error);

    &:hover {
      background-color: $color-error-lighter;
    }

    &:active {
      background-color: $color-error-darker;
      box-shadow: none;
    }

    &:disabled {
      opacity: 0.4;

      &:hover {
        background-color: $color-error;
      }
    }
  }

</style>

