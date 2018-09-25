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
    <div><ButtonOutlineSmall>Button Outline Small</ButtonOutlineSmall></div>
    <br>
    <div><ButtonWhite>Button White User</ButtonWhite></div>
    <br>

    <div><ButtonFeatureIcon> <Alert24/> </ButtonFeatureIcon></div>
    <br>
    <div><ButtonGradient 
      :color-direction="colorDirection" 
      :gradient-start="colorStart" 
      :gradient-end="colorEnd" >Button Gradient</ButtonGradient></div>
    <br>
    <div>
      <ButtonFeatureLabel> 
        <template slot="icon"> <Alert24/> </template>
        <template slot="label"> Button Feature Label</template>
      </ButtonFeatureLabel>
    </div>
    <br>

    <div style="background: #292e31;  padding: 12px; border-radius: 10px; display: inline-block;">
      <h2 style="color: #fff; text-align: center;" > For Dark Backgrounds </h2>
      <br>

      <div><ButtonOutlineDark> Button Outline Dark </ButtonOutlineDark></div>
      <br>
      <div><ButtonOutlineDarkSmall> Button Outline Dark Small </ButtonOutlineDarkSmall></div>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'


import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonOutline, ButtonOutlineSmall, ButtonOutlineDark, ButtonOutlineDarkSmall, ButtonGradient , ButtonWhite, ButtonFeatureIcon, ButtonFeatureLabel} from '@/index'

/*desired Icons to be used must be individually imported here and listed in export
componenets to be used for the Feature Buttons */

import { Alert24 } from "@fishtank/icons-vue"


export default Vue.extend({
  components: {
    //imported buttons
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
    ButtonWhite,
    ButtonOutline,
    ButtonGradient,
    Alert24
    ButtonFeatureLabel,
    ButtonFeatureIcon,
    ButtonOutlineDark,
    ButtonOutlineSmall,
    ButtonOutlineDarkSmall,
  },

  data: function(){
    return{

      colorStart : "#0018AB",
      colorEnd : "#9933CC",
      colorDirection: "to right",

    }
  }
})
</script>

