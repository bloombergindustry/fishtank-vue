<template>
  <div 
    :class="[{'ft-small':small}]">
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  model:{
    prop: 'modelValue',
    event:'change'
  },
  provide () {
    return {
      ["modelValue"]: this.modelValue
    }
  },
  props:{
    small:{
      required:false,
      default:false,
      type: Boolean
    },
    modelValue: {
      type:[String,Boolean,Object,Number],
      default: "",
      require:true
    },
  }
})
</script>
