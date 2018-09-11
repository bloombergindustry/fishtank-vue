<template>
  <div>
    <div><ButtonPrimary>Button Primary</ButtonPrimary></div>
    <br>
    <ButtonPrimary :block="true">Button Primary</ButtonPrimary>
    <br>
    <div><ButtonSecondary>Button Secondary</ButtonSecondary></div>
    <br>
    <div><ButtonDestructive>Button Destructive</ButtonDestructive></div>
    <br>
    <div><ButtonOutline>Button Outline</ButtonOutline></div>
    <br>
    <div><ButtonGradient 
      :color-direction="colorDirection" 
      :gradient-start="colorStart" 
      :gradient-end="colorEnd" >Button Gradient</ButtonGradient></div>
    <br>
    <div><ButtonGradient 
      :color-direction="colorDirection" 
      :gradient-start="colorStart" 
      :gradient-end="colorEnd" 
      :block="true">Button Gradient</ButtonGradient></div> 
    <br>
    <div><ButtonGradient 
      :color-direction="colorDirection" 
      gradient-start="red"
      gradient-end="yellow" >Button Gradient</ButtonGradient></div>
    <br>
    <div><ButtonGradient  >Button Gradient</ButtonGradient></div>
    <br>
    <div><ButtonWhite>Button White</ButtonWhite></div>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonOutline, ButtonGradient , ButtonWhite} from '@/index'

export default Vue.extend({
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
    ButtonWhite,
    ButtonOutline,
    ButtonGradient
  },
  data: function(){
    return{
      colorStart : "#0018AB",
      colorEnd : "#9933CC",
      colorDirection: "to right"
    }
  }
})
</script>

