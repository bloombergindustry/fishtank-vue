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
    <div><ButtonWhite>Button White</ButtonWhite></div>
    <br>
    <div><ButtonGradient :color-direction="colorDirection" :gradient-start="colorStart" :gradient-end="colorEnd" >Button Gradient</ButtonGradient></div>
    <br>

    <div><ButtonFAB v-bind:fab-option="fabLinks" :fab-color-primary="fabPrimaryColor" :fab-color-secondary="fabSecondaryColor"> + </ButtonFAB></div>
    <br>

    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonWhite, ButtonOutline, ButtonGradient, ButtonFAB } from '@/index'

export default Vue.extend({
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
    ButtonOutline,
    ButtonWhite,
    ButtonGradient,
    ButtonFAB
  },
  data: 
  function(){
    return{
      //Relevant to ButtonGradient
      colorStart : "#0018AB",
      colorEnd : "#9933CC",
      colorDirection: "to right",

      //Relevant to ButtonFAB
      fabLinks:[
        {icon: '1', text: 'Facebook'},
        {icon: '2', text: 'Twitter'},
        {icon: '3', text: 'Instagram'},
      ],
      fabPrimaryColor: '#EA60A7',
      fabSecondaryColor: '#0D9DDB',
    }
  },
  




})
</script>

