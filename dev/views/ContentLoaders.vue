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
   
    <div>
      <ButtonFAB 

        :fab-color-primary-start="fabPrimaryColorStart"
        :fab-color-primary-end="fabPrimaryColorEnd" 
        :fab-color-secondary="fabSecondaryColor"
        :option-one-link="fabLink1"
        :option-two-link="fabLink2"
        :option-three-link="fabLink3">

        <template slot="mainIcon"> <More32/>  </template>

        <template slot="option1"> <ArchiveEmail24/> </template>
        <template slot="option2"> <FlagO24/> </template>
        <template slot="option3"> <Help24/>  </template>
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
  Alert24, 
  ArchiveEmail24, 
  FlagO24, 
  Help24, 
  More32 
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
    Alert24,
    More32,
    ArchiveEmail24, 
    FlagO24, 
    Help24,
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

      fabLink1 : 'https://twitter.com/',
      fabLink2 : 'https://facebook.com/',
      fabLink3 : 'https://instagram.com/',
    }
  },
  




})
</script>

