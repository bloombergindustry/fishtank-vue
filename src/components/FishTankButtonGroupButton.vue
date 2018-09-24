<template>
  <div>
    <label 
      :for="(id !==null? id: labelId)">
      <input 
        :id="(id !==null? id: labelId)" 
        :value="value" 
        :checked ="shouldBeChecked" 
        type="radio" 
        name="">
      {{ label }}
    </label>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  inject: ['modelValue'],
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
      return `ft-button-group-button-${(this as any)._uid}`
    },
  }
})
</script>
