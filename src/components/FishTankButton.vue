<template>
  <base-button
    v-bind="$attrs"
    :class="buttonClass"
    v-on="$listeners">
    <slot />
  </base-button>
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
    baseButton:FishTankBaseButton
  },
  props:{
    primary:{
      type: Boolean,
      default: false
    },
    secondary:{
      type: Boolean,
      default: false
    },
    destructive:{
      type: Boolean,
      default: false
    },
  },
  methods:{
    buttonClass(){
      if (this.primary) {return 'primary'}
      else if (this.secondary) return 'secondary'
      else if (this.destructive) return 'destructive'
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
