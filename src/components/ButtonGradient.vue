<template>
  <a class="ft-button--wrapper" href="#" :style="returnGradientStyle">
  <BaseButton 
    v-bind="$attrs"
    class="ft-button--gradient"
    v-on="$listeners"
  >
    <slot/>
  </BaseButton>
  </a>
</template>

<script lang="ts">
import Vue from "vue"
import BaseButton from "./BaseButton.vue"

export default Vue.extend({
  name: "ButtonGradient",
  components: {
    BaseButton
  },
  props:{
    gradientStart :{type:String, required:true, default:"#000000"},
    gradientEnd :{type:String, required:true, default:"#000000"},
    colorDirection :{type:String, required:false,default:"to right"}

  },   
  computed:{
    returnGradientStyle(): string {
      

      return `background-image: linear-gradient(${this.colorDirection}, ${this.gradientStart}, ${this.gradientEnd} );`
      
    }
  }
})

</script>
