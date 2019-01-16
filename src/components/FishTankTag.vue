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
          <FishTankText
            :color="getStateColor" 
            inline 
            size="baseMd"
            semi-bold>{{ label }} </FishTankText>
          <span
            v-if="iconPosition==='right'"
            :class="[$style.icon, {[$style.iconRight]: (iconPosition==='right')}]">
            <CloseSml24
              v-if="removable"
              :class="[$style.iconAlignment, {[$style.iconChecked]:isChecked}]"/>
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
import { default as FishTankText } from '@/components/FishTankText.vue'

export default Vue.extend({
  name:"FishTankTag",
  introduction: "Component Introduction",
  description: "Component description",
  components: {
    CloseSml24,
    FishTankText
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
      propsDocData: this.$options.props,

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
    getStateColor():string{
      if (!this.disabled){
        if(this.isChecked){
          return 'white'
        } else { 
          return 'gray'
        }
      } else {
        if(this.isChecked){
          return 'disabled'
        } else { 
          return 'disabled'
        }
      }
    },
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
  @import '../../node_modules/@fishtank/colors/dist/index.custom-properties';
  @import '../../node_modules/@fishtank/space/dist/index.custom-properties';
  .wrap{
    position: relative;
    display: inline-block;
    position: relative;
    margin: 0px;
  }
  .wrap.label:hover{
    color: var(--color-black);
  }
  .input{
    position: absolute;
    width:100%;
    height: 100%;
    display: block;
    opacity: 0;
    cursor: pointer;
  }
  .input:disabled{
    cursor: default; 
  }
  .tag{
    border-radius: 6px;
    color: var(--color-gray);
    background-color: var(--color-secondary);
    border: 1px solid var(--color-gray-lighter);
    padding: 3px calc(var(--baseline)*2) 3px calc(var(--baseline)*2);
    vertical-align: middle;
  }
  .hasIcon{
    padding-right: 28px;
  }
  .checked{
    color: var(--color-white);
    background-color: var(--color-selected);
    border: 1px solid var(--color-selected);
  }
  .disabled{
    color: var(--color-disabled);
    background-color: var(--color-gray-lightest);
    border: 1px solid var(--color-gray-lighter);
  }
  .label:hover .tag{
    color: var(--color-black);
      background-color: var(--color-secondary-lighter);
  }
  .label:hover .checked{
    color: var(--color-white);
    background-color: var(--color-selected-lighter);
    border-color: var(--color-selected-lighter);
  }
  .label:hover .disabled{
    color: var(--color-disabled);
    background-color: var(--color-gray-lightest);
    border-color: var(--color-gray-lighter);
  }
  .labelContent{
    display: flex;
  }
  .icon{
    margin-top: -2px;
    position: relative;
    cursor: pointer;
  }
  .iconRight{
    padding-left: 0;
  }
  .iconAlignment{
    position: absolute;
    padding-left: var(--baseline);
  }
  .iconChecked{
    color: var(--color-white);
  }
  body.user-is-tabbing .focused {
    box-shadow: 0 0 0 2px var(--color-selected-darkest);
  }
</style>