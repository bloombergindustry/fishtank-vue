<template>
  <div class="ft-radio">
    <label 
      :for="(id !==null? id: labelId)"
      class="ft-radio__label">
      <input 
        :disabled="disabled" 
        :id="(id !==null? id: labelId)"  
        :value="value" 
        :checked ="shouldBeChecked" 
        class="ft-radio__input" 
        type="radio" 
        v-on="listeners">
      <div class="ft-radio__icon"/>
      <div class="ft-radio__label-content">
        {{ label }}
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'
export default Vue.extend({
  mixins: [
    a11y,
  ],
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


