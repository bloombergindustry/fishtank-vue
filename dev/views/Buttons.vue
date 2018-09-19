<template>
  <div>
    <div><ButtonPrimary>Button Primary</ButtonPrimary></div>
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
    <div><ButtonWhite>Button White</ButtonWhite></div>
    <br>

    <div style="background: #292e31;  padding: 12px; border-radius: 10px; display: inline-block;">
      <h2 style="color: #fff; text-align: center;" > For Dark Backgrounds </h2>
      <br>

      <div><ButtonOutlineDark> Button Outline Dark </ButtonOutlineDark></div>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonOutline, ButtonOutlineDark, ButtonGradient , ButtonWhite} from '@/index'

export default Vue.extend({
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
    ButtonWhite,
    ButtonOutline,
    ButtonGradient,
    ButtonOutlineDark,
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

