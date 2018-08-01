<template>
  <div class="fishtank-radio">
    <label 
      :for="id" 
      class="fishtank-radio__label">
      <input 
        :disabled="disabled" 
        :id="id" 
        :value="value" 
        :checked ="shouldBeChecked" 
        class="fishtank-radio__input" 
        type="radio" 
        @change="updateFtRadio">
      <div class="fishtank-radio__icon"/>
      {{ label }}
    </label>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:'FishtankRadio',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props:{
    value:{
      type:[String,Boolean,Object,Number], 
      default:null,
      require:true
    },
    disabled:{
      type:Boolean,
      default:null,
      require:false
    },
    modelValue: {
      type:[String,Boolean,Object,Number],
      default: "",
      require:true
    },
    label:{
      type:String,
      default:null,
      required:true
    },
    id:{
      type:String,
      default:null,
      required:false
    }
  },
  computed:{
    shouldBeChecked():Boolean{
      return this.value === this.modelValue
    }
  },
  methods:{
    updateFtRadio():void{
      this.$emit('change', this.value)
    }
  },
})
</script>


