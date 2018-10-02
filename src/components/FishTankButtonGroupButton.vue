<template>
  <div 
    slot-scope="slotProps"
    :class="[{'ft-buttongroup__button--active':shouldBeChecked},{'ft-buttongroup__button--disabled':disabled},'ft-buttongroup__button',{'ft-buttongroup__button--small':fishtankButtonGroupShared.isSmall},]" 
    role="radio">
    <label 
      :for="(id !==null? id: labelId)"
      
      :class="['ft-buttongroup__button__label', {'ft-baseButton--small':fishtankButtonGroupShared.isSmall}]">
      <input 
        :disabled="disabled" 
        :id="(id !==null? id: labelId)"  
        :value="value" 
        :checked ="shouldBeChecked" 
        :tabindex="shouldBeChecked ? 0 : -1"
        class="ft-buttongroup__button__input" 
        type="radio" 
        v-on="listeners"
        @focus="fishtankButtonGroupShared.isFocused = true"
        @blur="fishtankButtonGroupShared.isFocused = false">
      <!-- <div class="ft-buttongroup__button__icon"/> -->
      <div :class="['ft-buttongroup__button__label-content', {'ft-buttongroup__button__label-content--small':fishtankButtonGroupShared.isSmall}]">
        {{ label }}
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'

export default Vue.extend({
  mixins:[
    a11y
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
    },
    fishtankButtonGroupShared:{
      type:Object,
      default:()=>{},
    },
  },
  inject:{
    fishtankButtonGroupShared:{
      default:{
        isSmall:false,
      },
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
  },
})
</script>
