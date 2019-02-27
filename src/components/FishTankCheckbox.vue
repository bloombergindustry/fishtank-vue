<template>
  <div 
    :class="[$style.checkbox, {[$style.disabled]:disabled},(value ? [$style.checked] : [$style.unchecked])]"
    
  >
    <label
      :for="(id !==null? id: labelId)"
      :class="$style.label"
    >
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="isChecked"
        :value="value"
        :class="$style.native" 
        type="checkbox"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-on="listeners">
      <div 
        :class="[$style.animationWrap, {'a11y': isFocused}]">
        <transition 
          name="transition-scale"
          :enter-active-class="$style.transitionScaleEnterActive"
          :leave-active-class="$style.transitionScaleLeaveActive"
          :enter-class="$style.transitionScaleEnter"
          :leave-to-class="$style.transitionScaleLeaveTo">
          <CheckboxSelected 
            v-if="isChecked"
            :key="`{$labelId}+'-svgSelected'`"
            :class="[$style.svgSelected, returnEnabledDisabled]"
            
          />
          <CheckboxUnselected 
            v-if="!isChecked"
            :key="`{$labelId}+'unselected'`"
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
import { FishTankText } from '@/index'
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
    prop: 'modelValue',
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
      default:null,
      type: [String, Boolean, Object, Array, Number],
      description:`When the checkbox bound to an array via v-model, the value or data object added or removed from the array.`
    },
    modelValue: {
      type:[String, Boolean, Object, Array, Number],
      default: false
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
      checkProxy:false,
      isFocused:false
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
      return `checkbox-${(this as any)._uid}`
    },
    returnEnabledDisabled(): string {
    return this.disabled ? "disabled" : "animationWrap__enabled"
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

<style lang="scss">
  @import "../../node_modules/@fishtank/colors/dist/index";
  body.user-is-tabbing {
    .a11y {
      box-shadow: 0 0 0 2px $color-selected;
    }
  }
</style>

<style module lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

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

