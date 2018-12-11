<template>
  <div 
    :class="[$style.wrap]"  
    :aria-label="removable ? `Remove ${label}`:null" >
    <label
      :for="(id !==null? id: labelId)"
      :class="$style.label"
    >
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="isChecked"
        :value="value"
        :class="[$style.input]"
        type="checkbox"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-on="listeners">
      <div 
        :class="[$style.tag, {[$style.checked]:isChecked}, {[$style.disabled]:disabled}, {[$style.hasIcon]:hasIcon}, {'focused': isFocused}]">
        <div
          :class="$style.labelContent">
          <!-- <span
            v-if="iconPosition==='left'"
            :class="[$style.icon, {[$style.iconLeft]: (iconPosition==='left')}]">
            <slot/>
          </span> -->
          <span
            :class="[$style.labelText]">
            {{ label }}</span>
          <span
            v-if="iconPosition==='right'"
            :class="[$style.icon, {[$style.iconRight]: (iconPosition==='right')}]">
            <CloseSml24
              v-if="removable"
              :class="$style.iconAlignment"/>
            <slot/>
          </span>
        </div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { CloseSml24 } from '@fishtank/icons-vue' 
import a11y from '@/util/a11y'

export default Vue.extend({
  name:"FishTankTag",
  introduction: "Component Introduction",
  description: "Component description",
  token:[`
    <FishTankTag
    v-model="tagOne"
    label="Binary Tags"/>
  `],
  components: {
    CloseSml24
  },
  mixins:[
    a11y
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
      description:"this is the component description",
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
    },
    removable:{
      type:Boolean,
      required:false,
      default:false
    },
    iconPosition:{
      type: String,
      default: 'right',
      required:false
    }
  },
  data(){
    return {
      checkProxy:false,
      isFocused: false,
      propsDocData: this.$options.props
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
      return `${this.$options.name}-${(this as any)._uid}`
    },
    hasIcon(): boolean {
      if (this.removable || this.$slots.default) {
        return true
      } else {
        return false
      }
    },
    // returnStyle(){
    //   return JSON.stringify(this.$style)
    // }
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
    },
  }
})
</script>

<style module lang="scss">
  @import '../styles/fonts';
  @import '../styles/mixins';
  
  .wrap{
    position: relative;
    display: inline-block;
    position: relative;
    margin: 0px;
    /* height: 28px; */
  
    &:hover {
      &.label{
        color: $color-black;
      }
    }
  }
  .input{
    position: absolute;
    width:100%;
    height: 100%;
    display: block;
    opacity: 0;
    cursor: pointer;
    &:disabled{
      cursor: default; 
    }
  }
  .tag{
    border-radius: 6px;
    color: $color-gray;
    background-color: $color-secondary;
    border: 1px solid $color-gray-lighter;
    padding: 3px $baseline*2 3px $baseline*2;
    vertical-align: middle;
  }
  .labelText{
    @include font-base-md();
    font-family: $font-primary;
    letter-spacing: $letterspacing-base-md;
    font-weight: $fontweight-semi;
  }
  .hasIcon{
    padding-right: 28px;
  }
  .checked{
    color: $color-white;
    background-color: $color-selected;
    border: 1px solid $color-selected;
  }
  .disabled{
    color: $color-disabled;
    background-color: $color-gray-lightest;
    border: 1px solid $color-gray-lighter;
  }
  .label{
    &:hover .tag{
      color: $color-black;
      background-color: $color-secondary-lighter;
    }
    &:hover .checked{
      color: $color-white;
      background-color: $color-selected-lighter;
      border-color: $color-selected-lighter;
    }
    &:hover .disabled{
      color: $color-disabled;
      background-color: $color-gray-lightest;
      border-color: $color-gray-lighter;
    }
  }
  .labelContent{
    display: flex;
  }
  .icon{
    margin-top: -2px;
    position: relative;
    cursor: pointer;
  }
  /* .iconLeft{
    padding-right: 0;
  } */
  .iconRight{
    padding-left: 0;
  }
  .iconAlignment{
    position: absolute;
    padding-left: $baseline;
  }
</style>
<style lang="scss">
@import '../styles/variables';
  body.user-is-tabbing {
    .focused {
      box-shadow: 0 0 0 2px $color-selected-darkest;
    }
  }
</style>

<token>
  
</token>