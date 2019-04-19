<template>
  <div 
    :class="[isSwitch ? 'switch':'checkbox', {['disabled']:disabled},(value ? 'checked' : 'unchecked')]" >
    <label
      :for="(id !==null? id: null)"
      class="label">
      <input 
        :id="(id !==null? id: null)" 
        :disabled="disabled"
        :checked="value"
        class="input" 
        @click="emitChange"
        type="checkbox"
        @focus="isFocused = true"
        @blur="isFocused = false">

      <template v-if="isSwitch">
        <div :class="['inputCheckboxWrap', 'a11y']">
          <div class="inputCheckboxTarget"/>
        </div>
        <div class="labelContent">
          <slot v-if="$slots.default"/>
          <span v-else>
            {{ label }}
          </span>
        </div>
      </template>
      
      <template v-else>
        <div
          :class="['animationWrap', {'a11y': isFocused}]">
          <transition 
            name="transition-scale"
            enter-active-class="transitionScaleEnterActive"
            leave-active-class="transitionScaleLeaveActive"
            enter-class="transitionScaleEnter"
            leave-to-class="transitionScaleLeaveTo">
            <CheckboxSelected 
              v-if="value"
              :key="`{$keyId}+'-svgSelected'`"
              :class="['svgSelected', returnEnabledDisabled]"
              
            />
            <CheckboxUnselected 
              v-if="!value"
              :key="`{$keyId}+'unselected'`"
              :class="['svgUnselected', returnEnabledDisabled]"
            />
          </transition>
        </div>
        <div class="labelContent">
          <slot v-if="$slots.default"/>
          <fish-tank-text
            v-else 
            size="baseMd"
            color="grayDark">{{ label }}</fish-tank-text>
        </div>
        
        <!-- <div
           class="labelContent">
          <div class="labelContentLabel">
            
          </div>
        </div> -->
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import { 
  CheckboxSelected24 as CheckboxSelected, 
  CheckboxUnselected24 as CheckboxUnselected 
} from "@fishtank/icons-vue"
import FishTankText from './FishTankText.vue'
import a11y from '@/util/a11y'

export default Vue.extend({
  name:"FishTankCheckbox",
  components: {
    CheckboxSelected,
    CheckboxUnselected,
    FishTankText
  },
  mixins: [
    a11y,
  ],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    disabled:{
      type:Boolean,
      required:false,
      default:false,
      description:`Disable the checkbox`
    },
    value: {
      default:false,
      type: [Boolean, Array],
      description:`Checkbox binding to a boolean or array`
    },
    label: {
      type: String,
      required: true,
      description:`Checkbox label`
    },
    id:{
      type:String,
      default:null,
      required:false,
      description:`Checkbox element ID`
    },
    // Slider is a legacy prop from the original BLAW checkbox component
    slider: Boolean,
    switch: Boolean,
  },
  methods:{
    emitChange(){
      this.$emit('change', !(this as any).value)
    }
  },
  data(){
    return {
      isFocused:false
    }
  },
  computed: {
    keyId(): string {
      return `checkbox-${(this as any)._uid}`
    },
    returnEnabledDisabled(): string {
    return this.disabled ? "disabled" : "animationWrap__enabled"
    },
    isSwitch(): boolean{
      return (this.slider ? true :
                this.switch ? true : false)
    }
  }
})
</script>

<style lang="scss">
  @import "../../node_modules/@fishtank/colors/dist/index";
  body.user-is-tabbing {
    .a11y:focus {
      box-shadow: 0 0 0 2px $color-selected;
    }
  }
</style>

<style scoped lang="scss">
  @import '../styles/mixins';

.checkbox {
  position: relative;
}
.input{
  position: absolute;
  width:100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
.label{
  display: flex;
}
.animationWrap{
  margin-top: 4px;
  position: relative;
  width:24px;
  height: 24px;
}
.svgSelected, .svgUnselected {
  position: absolute;
  left: 0;
  top:0;
}
.svgSelected{
  color:$color-selected;
}
.svgUnselected{
  color: $color-gray;
}

.labelContent {
  padding-left: $baseline*3;
  margin: 6px 0;
}
.labelContentLabel {
  margin: 6px 0;
}
  
.checkbox:hover{
  .svgSelected{
    color:$color-selected-darkest;
  }
  .svgUnselected{
    color: $color-black;
  }
  .labelContent {
    color: $color-black;
  }
}
.disabled{
  .labelContent, .svgSelected, .svgUnselected{
    color:$color-disabled;
  }
  &:hover{
    .labelContent, .svgSelected, .svgUnselected{
      color:$color-disabled
    }
  }
}

$checkbox-time:0.3s;

.transitionScaleLeaveActive, .transitionScaleLeaveActive{
  top: 0px;
  left: 0px;
}
.transitionScaleEnterActive {
  transition: transform $checkbox-time, opacity $checkbox-time, delay $checkbox-time;
}
.transitionScaleLeaveActive {
  transition: transform $checkbox-time, opacity $checkbox-time;
}
.transitionScaleEnter, .transitionScaleLeaveTo {
  transform: scale(0);
  opacity: 0;
  left: 0;
  top: 0px;
}
</style>

<style scoped lang="scss">
  @import '../styles/mixins';
  .switch .label {
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
  .switch .input{
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
  .switch  .input:disabled ~ .labelContent{
    color: $color-disabled;
    cursor: default;
  }

  .switch .input:disabled + .inputCheckboxWrap{
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
  .switch .input:disabled + .inputCheckboxWrap .inputCheckboxTarget{
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
  .switch .label:after{
      display: block;
      clear:both;
      content:'';
  }
  .switch .input:disabled + .inputCheckboxWrap .inputCheckboxTarget:after {
    background-color: $color-disabled;
  }
  .switch .input:disabled:checked + .inputCheckboxWrap {
    background-color:$color-secondary;
    border:1px solid $color-disabled;
  }

  .switch .input:checked + .inputCheckboxWrap{
    background-color:$color-selected;
    border:1px solid $color-selected-darkest;
  }
  .switch .input + .inputCheckboxWrap .inputCheckboxTarget {
    transform: translateX(0px);
    transition: all 0.3s ease;
  }
  .switch .input:checked + .inputCheckboxWrap .inputCheckboxTarget {
    transform: translateX(17px);
    transition: all 0.3s ease;
  }
</style>

