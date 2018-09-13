<template>
  <div class="fishtank-radio">
    <label 
      :for="(id !==null? id: labelId)"
      class="fishtank-radio__label">
      <input 
        :disabled="disabled" 
        :id="(id !==null? id: labelId)"  
        :value="value" 
        :checked ="shouldBeChecked" 
        class="fishtank-radio__input" 
        type="radio" 
        v-on="listeners">
      <div class="fishtank-radio__icon"/>
      <div class="fishtank-radio__label-content">
        {{ label }}
      </div>
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
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        change: ($event: MouseEvent) => {
          if (this.disabled) return 
          this.$emit("change", this.value)
        }
      }
    },
    labelId(): string {
      return `ft-radio-${(this as any)._uid}`
    },
  }
})
</script>


