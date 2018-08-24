<template>
  <div>
    <div><ButtonPrimary>Button Primary</ButtonPrimary></div>
    <br>
    <div><ButtonSecondary>Button Secondary</ButtonSecondary></div>
    <br>
    <div><ButtonDestructive>Button Destructive</ButtonDestructive></div>
    <br>
    <div><ButtonGradient :color-direction="colorDirection" :gradient-start="colorStart" :gradient-end="colorEnd" >Button Gradient</ButtonGradient></div>
    <br>

    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonGradient } from '@/index'

export default Vue.extend({
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive,
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

