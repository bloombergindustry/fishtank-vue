<template>
  <div 
    :class="[$style.button, {[$style.disabled]:disabled}, {[$style.active]:shouldBeChecked}, {[$style.small]:fishtankButtonGroupShared.isSmall}]">
    <label 
      :for="(id !==null? id: labelId)"
      :tabindex="shouldBeChecked ? 0 : -1"
      :class="[$style.label]"
      @focus="setFocusInput()">
      <input 
        ref="input"
        :disabled="disabled" 
        :id="(id !==null? id: labelId)"  
        :value="value" 
        :checked ="shouldBeChecked" 
        :tabindex="shouldBeChecked ? 0 : -1" 
        :class="$style.input" 
        type="radio"
        v-on="listeners"
        @focus="fishtankButtonGroupShared.isFocused = true"
        @blur="fishtankButtonGroupShared.isFocused = false">
      <div 
        :class="[$style.labelContent, {[$style.labelContentSmall]:fishtankButtonGroupShared.isSmall}]">
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
      require:true,
      description:"Button Value"
    },
    disabled:{
      type:Boolean,
      default:null,
      require:false,
      description:"Disable the button"
    },
    modelValue: {
      type:[String,Boolean,Object,Number],
      default: "",
      require:true
    },
    label:{
      type:String,
      default:null,
      required:true,
      description:"Button Label"
    },
    id:{
      type:String,
      default:null,
      required:false,
      description:"Button ID"
    },
    name:{
      type:String,
      default:"",
      required:true,
      description:"Button Name"
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
        register(){},
        unregister(){}
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
      return `button-group-button-${(this as any)._uid}`
    },
    getId(){
      return (this as any)._uid
    }
  },
  methods:{
    setFocusInput: function(){
      (this.$refs.input as HTMLInputElement).focus()
    },
    setValue: function() {
      this.$emit("change", this.value)
    }
  },
  mounted(){
    this.fishtankButtonGroupShared.register(this)
  },
  destroyed(){
    this.fishtankButtonGroupShared.unregister(this)
  },
})
</script>

<style module lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  
  .button {
    flex: 1 0 0;
    text-align: center;
    box-sizing: border-box;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 0px;
    border-style: solid;
    border-color: $color-gray-lighter;
    background-color:$color-secondary;
    /*transition: all 0.1s ease;*/
    overflow: hidden;
    &:first-of-type{
      border-radius: 2px 0px 0px 2px;
    }
    &:last-of-type{
      border-right-width: 1px;
      border-radius: 0 2px 2px 0;
    }
    &:hover {
      background-color: $color-secondary-lighter;
      color: $color-black;
    }
    // padding: 0 12px 0 12px;
    height:40px;
  } 
  .disabled {
    color: $color-disabled;
    &:hover{
      cursor:default;
      color: $color-disabled;
      background-color:$color-secondary;
    }
  }
  .small{
    height: 28px;
    &:first-of-type{
      border-radius: 4px 0px 0px 4px;
    }
    &:last-of-type{
      border-right-width: 1px;
      border-radius: 0 4px 4px 0;
    }
  }
  .input{
    cursor: pointer;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &:disabled {
      cursor:not-allowed;
    }
  }
  .label{
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;
    font-weight: $fontweight-regular;
    font-size: $fontsize-base-lg;
    line-height: $lineheight-base-lg;
    letter-spacing: $letterspacing-base-lg;
    font-family: $font-primary;
    cursor: pointer;
  }
  .labelContent {
    padding: 7px $baseline*3 9px $baseline*3;
  }
  .labelContentSmall{
    font-size:$fontsize-base-md;
    font-weight: $fontweight-semi;
    line-height: $lineheight-base-md;
    letter-spacing: $letterspacing-base-md;
    padding:3px $baseline*2 5px $baseline*2;
  }
  // Why is this declared twice?
  .buttongroup__button__input{
    position: absolute;
    left: 0;
    top: 0;
  }
  .active, .active:hover{
    color:$color-white;
    background-color: $color-selected; 
    border-color: $color-selected-darkest; 
  }
</style>

