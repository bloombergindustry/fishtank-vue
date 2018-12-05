<template>
  <a 
    :class="{ 'ft-button--block': block }"
    :style="returnGradientStyle" 
    class="ft-button--wrapper">
    <FishTankBaseButton 
      v-bind="$attrs"
      :block="block"
      class="ft-button--gradient"
      v-on="$listeners"
    >
      <slot/>
    </FishTankBaseButton>
  </a>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonGradient",
  introduction: "Gradient Button",
  description: "Gradient Button",
  token:[`
    <FishTankButtonGradient
    :gradientStart="startingHexColorVariable"
    :gradientEnd="endingHexColorVariable"
    :colorDirection="to right"
    >Button Gradient</FishTankButtonGradient>
  `],
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
