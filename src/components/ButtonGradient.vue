<template>
  <a 
    :class="{ 'ft-button--block': block }"
    :style="returnGradientStyle" 
    class="ft-button--wrapper">
    <BaseButton 
      v-bind="$attrs"
      :block="block"
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
    gradientStart :{type:String, required:true},
    gradientEnd :{type:String, required:true},
    colorDirection :{type:String, required:false,default:"to right"},
    block: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    returnGradientStyle(): String{
      return `background-image: linear-gradient(${this.colorDirection}, ${this.gradientStart}, ${this.gradientEnd} );`
    }
  }
})
</script>
