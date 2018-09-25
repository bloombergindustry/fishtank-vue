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
   
    <div><ButtonFAB v-bind:fab-option="fabLinks" :fab-color-primary="fabPrimaryColor" :fab-color-secondary="fabSecondaryColor"> + </ButtonFAB></div>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonOutline, ButtonOutlineSmall, ButtonOutlineDark, ButtonOutlineDarkSmall, ButtonGradient , ButtonWhite, ButtonFeatureIcon, ButtonFeatureLabel, ButtonFAB} from '@/index'

/*desired Icons to be used must be individually imported here and listed in export
componenets to be used for the Feature Buttons */

import { Alert24 } from "@fishtank/icons-vue"


export default Vue.extend({
  components: {
    //imported buttons
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
    ButtonOutline,
    ButtonWhite,
    ButtonGradient,
    Alert24,
    ButtonFAB,
    ButtonFeatureLabel,
    ButtonFeatureIcon,
    ButtonOutlineDark,
    ButtonOutlineSmall,
    ButtonOutlineDarkSmall,
  },

  data: function(){
    return{
      //Relevant to ButtonGradient
      colorStart : "#0018AB",
      colorEnd : "#9933CC",
      colorDirection: "to right",
      //Relevant to ButtonFAB
      fabPrimaryColor: '#EA60A7',
      fabSecondaryColor: '#0D9DDB',
      fabLinks:[
        {icon: '1', text: 'Twitter', link: 'https://twitter.com/'},
        {icon: '2', text: 'Facebook', link: 'https://www.facebook.com'},
        {icon: '3', text: 'Instagram', link: 'https://www.instagram.com'},
      ],
    }
  },
  




})
</script>

