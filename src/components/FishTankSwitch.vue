<template>
  <div  
    :class="$style.switch">
    <label 
      :for="(id !==null? id: labelId)"
      :class="$style.inputCheckboxLabel">
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="shouldBeChecked"
        :value="value"
        type="checkbox" 
        v-on="listeners">
      <div :class="[$style.inputCheckboxWrap, 'a11y']">
        <div :class="$style.inputCheckboxTarget"/>
      </div>
      <div :class="$style.labelContent">
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
import { a11y } from "../util/mixins"
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
      default:false,
      description:'Switch is disabled'
    },
    value: {
      default:null,
      type: [String, Boolean, Object, Array, Number],
      description:'Switch value'
    },
    modelValue: {
      type:[String, Boolean, Object, Array, Number],
      default: false
    },
    label: {
      type: String,
      required: true,
      description:'Switch label'
    },
    id:{
      type:String,
      default:null,
      required:false,
      description:'Switch ID'
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
      return `switch-${(this as any)._uid}`
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
  },
  mounted(){
    // eslint-disable-next-line no-console
    console.warn('FishTankSwitch is being deprecated in favor of FishTankCheckboxSwitch. It combines checkbox and switch visual presentation on top of the same boolean functionality of a checkbox input element. It will be removed from the library in October 2019. Please migrate to FishTankCheckboxSwitch.')
  }
})
</script>
<style lang="scss">
  @import '../styles/mixins';
  body.user-is-tabbing input:focus + .a11y {
    box-shadow: 0 0 0 2px $color-selected;
  }
</style>

<style module lang="scss">
  @import '../styles/mixins';

  .switch .inputCheckboxLabel {
    font-size: $fontsize-base-md;
    line-height: $lineheight-base-md;
    position: relative;
    font-family: $font-primary;
    display: block;
  }
  .switch {
    width: 100%; 
    position: relative;
    padding: 6px 0;
  }
  .switch input{
    width:100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 0;
    margin: 0px;
    top: 0;
    left:0;
    display: block; 
  }
  .switch  > label {
    top: 0px;
    color: $color-gray-dark;
  }
  .switch:hover > label{
    color: $color-black;
    cursor: pointer;
  }
    
  .switch .inputCheckboxWrap {
    width: 33px;
    height: 18px;
    background-color:$color-gray-light;
    border-radius: 10px;
    border:1px solid $color-gray;
    float: right;
  }
  .switch  input:disabled ~ .labelContent{
    color: $color-disabled;
    cursor: default;
  }

  .switch input:disabled + .inputCheckboxWrap{
    background-color:$color-secondary;
    border:1px solid $color-disabled;
  }
  .switch .inputCheckboxTarget{
    background-color: $color-secondary;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border:1px solid $color-gray-lighter;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.3);
    position: relative;
    top: -1px;
    left: -2px;
  }
  .switch input:disabled + .inputCheckboxWrap .inputCheckboxTarget{
    background-color: $color-secondary;
    border: 1px solid $color-disabled;
    box-shadow: none; 
  }
  .switch .inputCheckboxTarget:after{
    display:block;
    content:' ';
    position: relative;
    width:6px;
    height:6px;
    background-color: $color-selected;
    border-radius: 50%;
    top: 6px;
    left: 6px;
  }
  .switch .inputCheckboxLabel:after{
      display: block;
      clear:both;
      content:'';
  }
  
  .switch input:disabled + .inputCheckboxWrap .inputCheckboxTarget:after {
    background-color: $color-disabled;
  }

.switch input:disabled:checked + .inputCheckboxWrap {
    background-color:$color-secondary;
    border:1px solid $color-disabled;
  }

  .switch input:checked + .inputCheckboxWrap{
    background-color:$color-selected;
    border:1px solid $color-selected-darkest;
  }
  .switch input + .inputCheckboxWrap .inputCheckboxTarget {
    transform: translateX(0px);
    transition: all 0.3s ease;
  }
  .switch input:checked + .inputCheckboxWrap .inputCheckboxTarget {
    transform: translateX(17px);
    transition: all 0.3s ease;
  }

</style>

