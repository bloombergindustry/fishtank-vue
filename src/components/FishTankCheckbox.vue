<template>
  <div 
    :class="[$style.checkbox, {[$style.disabled]:disabled},(value ? [$style.checked] : [$style.unchecked])]"
    
  >
    <label
      :for="(id !==null? id: null)"
      :class="$style.label"
    >
      <input 
        :id="(id !==null? id: null)" 
        :disabled="disabled"
        :checked="value"
        :class="$style.native" 
        @click="emitChange"
        type="checkbox"
        @focus="isFocused = true"
        @blur="isFocused = false">
      <div 
        :class="[$style.animationWrap, {'a11y': isFocused}]">
        <transition 
          name="transition-scale"
          :enter-active-class="$style.transitionScaleEnterActive"
          :leave-active-class="$style.transitionScaleLeaveActive"
          :enter-class="$style.transitionScaleEnter"
          :leave-to-class="$style.transitionScaleLeaveTo">
          <CheckboxSelected 
            v-if="value"
            :key="`{$keyId}+'-svgSelected'`"
            :class="[$style.svgSelected, returnEnabledDisabled]"
            
          />
          <CheckboxUnselected 
            v-if="!value"
            :key="`{$keyId}+'unselected'`"
            :class="[$style.svgUnselected, returnEnabledDisabled]"
          />
        </transition>
      </div>
      <div
        v-if="label" 
        :class="$style.labelContent">
        <div :class="$style.labelContentLabel">
          <fish-tank-text 
            primary 
            size="baseMd"
            color="grayDark">{{ label }}</fish-tank-text>
        </div>
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
import FishTankText from './FishTankText.vue'
import { a11y } from "../util/mixins"

export default Vue.extend({
  /**
   * FishTankCheckbox V1
   * @deprecated
   * This component is being deprecated in favor of FishTankCheckboxV2.
   * It will be removed from the library in October of 2019.
   * FishTankCheckboxV2 offers a more standard and consistant API, and better code quality.
   * Please begin using FishTankCheckboxV2 to avoid any breaking changes.
   */
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

<style module lang="scss">
  @import '../styles/mixins';

.checkbox {
  position: relative;
}
.native{
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

