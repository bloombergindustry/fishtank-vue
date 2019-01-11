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
  name: "FishTankButtonPrimary",
  introduction: "Primary Button",
  description: "Primary Button",
  token:[`
    <FishTankButtonPrimary>
      Save</FishTankButtonPrimary>
  `,`
  <FishTankButtonPrimary 
    :block="true">
    Button Primary</FishTankButtonPrimary>
  `,
  `<FishTankButtonPrimary 
    @click="handleClick"
    >Button Primary</FishTankButtonPrimary>`,
  `<FishTankButtonPrimary
    :disabled="falsyVariable"
    :block="truthyVariable"
    >Button Primary</FishTankButtonPrimary>`
  ],
  components: {
    FishTankBaseButton
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
