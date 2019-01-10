<template>
  <div 
    :class="[value ? 'input-checkbox--checked' : 'input-checkbox--unchecked', {'input-checkbox__disabled':disabled}]"
    class="input-checkbox"
  >
    <label
      :for="(id !==null? id: labelId)"
      class="input-checkbox__label"
    >
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="isChecked"
        :value="value"
        class="input-checkbox__native" 
        type="checkbox"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-on="listeners">
      <div 
        :class="['input-checkbox__checkbox', {'focused': isFocused}]">
        <transition name="transition-scale">
          <CheckboxSelected 
            v-if="isChecked"
            :key="`{$labelId}+'-svg-selected'`"
            :class="returnEnabledDisabled"
            class="svg-selected"
          />
          <CheckboxUnselected 
            v-if="!isChecked"
            :key="`{$labelId}+'-ft-svg-unselected'`"
            :class="returnEnabledDisabled"
            class="svg-unselected"
          />
        </transition>
      </div>
      <div
        v-if="label" 
        class="input-checkbox__label-content">
        <div class="input-checkbox__label-content__label">{{ label }}</div>
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
import a11y from '@/util/a11y'

export default Vue.extend({
  name:"FishTankCheckbox",
  components: {
    CheckboxSelected,
    CheckboxUnselected
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
    return this.disabled ? "input-checkbox__checkbox__disabled" : "input-checkbox__checkbox__enabled"
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
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  body.user-is-tabbing {
    .focused {
      box-shadow: 0 0 0 2px $color-selected;
    }
  }

  //from scss file

.input-checkbox {
  position: relative;
}
.input-checkbox__native{
  position: absolute;
  width:100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
.input-checkbox__label{
  display: flex;
}
.input-checkbox__checkbox{
  margin-top: 4px;
  position: relative;
  width:24px;
  height: 24px;
}
.svg-selected, .svg-unselected {
  position: absolute;
  left: 0;
  top:0;
}
.svg-selected{
  color:$color-selected;
}
.svg-unselected{
  color: $color-gray;
}

.input-checkbox__label-content {
  @include font-base-md();
  font-family: $font-primary;
  font-weight:$fontweight-regular;
  font-size: $fontsize-base-md;
  line-height:$lineheight-base-md;
  letter-spacing: $letterspacing-base-md;
  color:$color-gray-dark;
  padding-left: $baseline*3;
  &__label{
    margin: 6px 0;
  }
}
  
.input-checkbox:hover{
  .svg-selected{
    color:$color-selected-darkest;
  }
  .svg-unselected{
    color: $color-black;
  }
  .input-checkbox__label-content {
    color: $color-black;
  }
}
.input-checkbox__disabled{
  .input-checkbox__label-content, .svg-selected, .svg-unselected{
    color:$color-disabled;
  }
  &:hover{
    .input-checkbox__label-content, .svg-selected, .svg-unselected{
      color:$color-disabled
    }
  }
}

$input-checkbox-time:0.3s;

.transition-scale-leave-active, .transition-scale-leave-active{
  top: 0px;
  left: 0px;
}
.transition-scale-enter-active {
  transition: transform $input-checkbox-time, opacity $input-checkbox-time, delay $input-checkbox-time;
}
.transition-scale-leave-active {
  transition: transform $input-checkbox-time, opacity $input-checkbox-time;
}
.transition-scale-enter, .transition-scale-leave-to {
  transform: scale(0);
  opacity: 0;
  left: 0;
  top: 0px;
}

</style>

