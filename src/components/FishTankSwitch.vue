<template>
  <div  
    class="ft-switch">
    <label 
      :for="(id !==null? id: labelId)"
      class="ft-input-checkbox-label">
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="shouldBeChecked"
        :value="value"
        type="checkbox" 
        v-on="listeners">
      <div class="ft-input-checkbox-wrap">
        <div class="ft-input-checkbox-target"/>
      </div>
      <div class="label-content">
        <slot v-if="label === null"/>
        <span v-else>
          {{ label }}
        </span>
      </div>
    </label> 
  </div>
</template>
<script lang="ts">

import Vue, { VNode }from 'vue'
import a11y from '@/util/a11y'
export default Vue.extend({
  name:"FishTankSwitch",
  mixins: [
    a11y,
  ],
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    disabled:{
      type:Boolean,
      required:false,
      default:false
    },
    value: {
      default:null,
      type: [String, Boolean, Object, Array, Number],
    },
    modelValue: {
      type:[String, Boolean, Object, Array, Number],
      default: false
    },
    label: {
      type: String,
      required: true
    },
    id:{
      type:String,
      default:null,
      required:false
    },
    trueValue: {
      default: true,
      type:[String, Boolean, Object, Array, Number]
    },
    falseValue: {
      default: false,
      type:[String, Boolean, Object, Array, Number]
    }
  },
  computed: {
    shouldBeChecked():any {
      if (this.modelValue instanceof Array) {
        let res = false
        if(this.modelValue.indexOf(this.value) >= 0) res = !res
        return res
      }
      return this.modelValue === this.trueValue
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        change: ($event: MouseEvent) => {
          if (this.disabled) return 
          this.updateInput($event)
        }
      }
    },
    labelId(): string {
      return `ft-switch-${(this as any)._uid}`
    },
  },
  methods: {
    updateInput(event:any) {
      let isChecked = event.target.checked

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
})
</script>

