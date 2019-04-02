<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="button--primary"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButton",
  introduction: "Fish Tank Button",
  description: "Fish Tank Button",
  token:[`
    <FishTankButton>
      Save</FishTankButton>
  `],
  components: {
    FishTankBaseButton
  },
  props:{
    primary:{
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss">

  @import '../styles/mixins';

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
