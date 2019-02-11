<template>

  <div 
    :class="[$style.radio]">
    <label 
      :for="(id !==null? id: labelId)"
      :class="[$style.radio__label]">
      <input 
        :disabled="disabled" 
        :id="(id !==null? id: labelId)"  
        :value="value" 
        :checked ="shouldBeChecked" 
        :class="[$style.radio__input, 'ft-a11y__input']" 
        type="radio"
        ref="input" 
        v-on="listeners">
      <div 
        :class="[$style.radio__icon, 'ft-a11y__icon']"/>
      <div 
        :class="[$style.radio__label__content]">
        {{ label }}
      </div>
    </label>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'
interface RadioComponentGroup {
  register(cmp:any):void,
  unregister(cmp:any):void
}
export default Vue.extend({
  name: "FishTankRadio",
  introduction: "Radio Input Element",
  description: "Radio Input Element",
  token:[
`<FishTankRadio 
  v-model="val" 
  value="beta" 
  label="beta"
  name="beta"/>`
  ],
  mixins: [
    a11y,
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
      description:"Radio Value"
    },
    disabled:{
      type:Boolean,
      default:null,
      require:false,
      description:"Radio is disabled"
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
      description:"Radio label"
    },
    id:{
      type:String,
      default:null,
      required:false,
      description:"Radio ID"
    },
    name:{
      type:String,
      default:"",
      required:true,
      description:"Radio name"
    },
    fishtankRadioGroupShared: {
      type: Object as () => RadioComponentGroup,
    }
  },
  inject:{
    fishtankRadioGroupShared:{
      default:{
        register(){},
        unregister(){}
      },
    }
  },
  mounted(){
    this.fishtankRadioGroupShared.register(this)
  },
  destroyed(){
    this.fishtankRadioGroupShared.unregister(this)
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
      return `radio-${(this as any)._uid}`
    },
  },
  methods:{
    setFocus(){
      (this.$refs.input as HTMLFormElement).focus()
    }
  }
})
</script>
<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  body.user-is-tabbing .ft-a11y__input:focus {
    & + .ft-a11y__icon{
      box-shadow: 0 0 0 2px $color-selected;
    }
  }
</style>

<style module lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";
/* fix box sizing bug*/
  .radio{
    font-family: $font-primary;
    position: relative;
    padding-left: $baseline*9;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .radio__input{
    opacity: 0;
    margin: 0;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  .radio__icon{
    transition: all 0.3s ease;
    display:inline-block;
    width:12px;
    height:12px;
    background-color: transparent;
    content:"";
    border: 2px solid $color-gray;
    border-radius:50%;
    position: absolute;
    left: 4px;
    top: 8px;
  }
  .radio__input + .radio__icon{
    &:after{
      content:"";
      width: 6px;
      height: 6px;
      background-color: $color-selected;
      border:1px solid $color-selected;
      border-radius: 50%;
      display: inline-block;
      top: 2px;
      left: 2px;
      position: absolute;
      transform: scale(0.0);
      transition: transform .3s cubic-bezier(.5,.1,.3,1.5);
    }
  }
  .radio__input:checked + .radio__icon{
    &:after{
      transform: scale(1.0);
    }
  }
  .radio__input:hover + .radio__icon{
    &:after{
      background-color: $color-selected-darker;
      border:1px solid $color-selected-darker;
    }
  }
  .radio__label{
    color: $color-gray-dark;
    font-size: $fontsize-base-md;
    line-height: $lineheight-base-md;
    letter-spacing: $letterspacing-base-md;
    font-weight:$fontweight-regular;
    &:hover{
      color:$color-black;
    }
  }
  .radio__input:hover {
    & + .ft-radio__icon{
      border:2px solid $color-black;
    }
  }
  .radio__input:disabled + .radio__icon{
    border:2px solid $color-disabled;
  }
  .radio__input:checked:disabled + .radio__icon{
    border:2px solid $color-disabled;
    &:after {
      background-color: $color-disabled;
      border:1px solid $color-disabled;
    }
  }
  .radio__input:disabled ~ .radio__label__content{
    color:$color-disabled;
  }

</style>



