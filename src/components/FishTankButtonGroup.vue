<template>
  <div 
    :class="[{'ft-small':small}, 'ft-buttongroup']">
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { setTimeout } from 'timers';
export default Vue.extend({
  model:{
    prop: 'modelValue',
    event:'change'
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
  },
})
</script>
