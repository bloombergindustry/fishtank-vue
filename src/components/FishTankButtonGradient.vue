<template>
  <a 
    :class="{ 'button--block': block }"
    :style="returnGradientStyle" 
    class="button--wrapper">
    <fish-tank-base-button 
      v-bind="$attrs"
      :block="block"
      class="button--gradient"
      v-on="$listeners">
      <slot />
    </fish-tank-base-button>
  </a>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonGradient",
  components: {
    FishTankBaseButton
  },
  props:{
    gradientStart :{
      type:String, 
      required:true, 
      default:"#000000",
      description:"Start Color of Gradient; String(Hex color, or valid CSS color)",
      },
    gradientEnd :{
      type:String,
      required:true, 
      default:"#000000",
      description:"End Color of Gradient; String(Hex color, or valid CSS color)",
      },
    colorDirection :{
      type:String, 
      required:false,
      default:"to right",
      description:"Horizontal Direction of Gradient; String(\"to right\" or \"to left\")",
      },
    block: {
      type: Boolean,
      default: false
    },
  },   
  computed:{
    returnGradientStyle(): string {
      return `background-image: linear-gradient(${this.colorDirection}, ${this.gradientStart}, ${this.gradientEnd} );`
    }
  }
})

</script>

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--block {
    display: block;
    width: 100%;
  }

  .button--wrapper{
    padding: 2px ;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
  }

  .button--gradient {
    border:none;
    background-color: $color-white;
    color: $color-gray;

    &:hover {
      background: transparent;
      color: $color-white;
    }
    &:disabled {
      opacity: 0.4;
      &:hover {
        background-color: $color-gray;
      }
    }
    &:active {
      background-color:rgba(0,0,0,0.3);
      border-color: rgba(0,0,0,0.3);
    }
  }

</style>
