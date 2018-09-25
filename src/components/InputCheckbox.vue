<template>
  <div 
    :class="value ? 'ft-input-checkbox--checked' : 'ft-input-checkbox--unchecked'"
    class="ft-input-checkbox"
  >
    <label
      :for="(id !==null? id: labelId)"
      class="ft-input-checkbox__label"
    >
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="isChecked"
        :value="value"
        class="ft-input-checkbox__native" 
        type="checkbox"
        v-on="listeners">
      <transition name="ft-transition-scale">
        <CheckboxSelected 
          v-if="isChecked"
          :key="`{$labelId}+'-ft-svg-selected'`"
          :class="returnEnabledDisabled"
          class="ft-input-checkbox__checkbox ft-svg-selected"
        />
        <CheckboxUnselected 
          v-if="!isChecked"
          :key="`{$labelId}+'-ft-svg-unselected'`"
          :class="returnEnabledDisabled"
          class="ft-input-checkbox__checkbox ft-svg-unselected"
        />
      </transition>
      <div
        v-if="label" 
        class="ft-input-checkbox__label-content">
        <p class="ft-input-checkbox__label-content__label">{{ label }}</p>
        <slot/>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import { 
  CheckboxSelected24 as CheckboxSelected, 
  CheckboxUnselected24 as CheckboxUnselected 
} from "@fishtank/icons-vue"

export default Vue.extend({
  name:"FishTankCheckbox",
  components: {
    CheckboxSelected,
    CheckboxUnselected
  },
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
  data(){
    return {
      checkProxy:false
    }
  },
  computed: {
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        change: ($event: MouseEvent) => {
          if (this.disabled) return 
          this.updateInput($event)
        }
      }
    },
    checked: {
      set:function(val:any){
        this.checkProxy = val
      },
      get: function(): Record<string, boolean | number | Function | Function[]>{
        return this.value
      }
    },
    isChecked: function(){
      if (this.modelValue instanceof Array) {
        let res = false
        if(this.modelValue.indexOf(this.value) >= 0) res = !res
        return res
      }
      return this.modelValue === this.trueValue
    },
    labelId(): string {
      return `ft-checkbox-${(this as any)._uid}`
    },
    returnEnabledDisabled(): string {
    return this.disabled ? "ft-input-checkbox__checkbox__disabled" : "ft-input-checkbox__checkbox__enabled"
    }
  },
  methods:{
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
