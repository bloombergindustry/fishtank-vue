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
    <div><ButtonWhite>Button White</ButtonWhite></div>
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
   
    <div>
      <ButtonFAB 
        :fab-color-primary-start="fabPrimaryColorStart"
        :fab-color-primary-end="fabPrimaryColorEnd" 
        :fab-color-secondary="fabSecondaryColor"
        :options-available="fabOptionsPresent"
        :option-one-link="fabLink1"
        :option-two-link="fabLink2"
      >

        <template slot="mainIcon"> <Add32/>  </template>

        <template slot="option1"> <Twitter24/> </template>
        <template slot="option2"> <Facebook24/> </template>
      </ButtonFAB>
    </div>
    <br>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  ButtonPrimary,
  ButtonSecondary,
  ButtonDestructive, 
  ButtonOutline, 
  ButtonOutlineSmall, 
  ButtonOutlineDark, 
  ButtonOutlineDarkSmall,
  ButtonGradient , 
  ButtonWhite, 
  ButtonFeatureIcon, 
  ButtonFeatureLabel, 
  ButtonFAB
} from '@/index'

/*desired Icons to be used must be individually imported here and listed in export
componenets to be used for the Feature Buttons */

import { 
  Add32,  
  Alert24, 
  Twitter24,
  Facebook24, 
  FlagO24,
  } from "@fishtank/icons-vue"


export default Vue.extend({
  components: {
    //imported buttons
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
    ButtonOutline,
    ButtonWhite,
    ButtonGradient,
    Add32,
    Alert24,
    Twitter24, 
    Facebook24, 
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

      fabPrimaryColorStart: '#0018AB',
      fabPrimaryColorEnd: '#9933CC',
      fabSecondaryColor: '#17509F',
      fabOptionsPresent : true,
      fabLink1 : 'https://twitter.com/',
      fabLink2 : 'https://facebook.com/',
    }
  },
  




})
</script>

