<template>
  <div :class="$style.wrap">
    <label
      :for="(id !==null? id: labelId)"
    >
      <input 
        :id="(id !==null? id: labelId)" 
        :disabled="disabled"
        :checked="isChecked"
        :value="value"
        :class="$style.input"
        type="checkbox"
        v-on="listeners">
      <div :class="$style.label">
        <div>{{ label }}</div>
        <slot/>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name:"FishTankTag",
  components: {
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
      return `ft-tag-${(this as any)._uid}`
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

<style module lang="scss">
  @import '../styles/fonts';
  @import '../styles/mixins';
  @import '../styles/variables';
  .wrap{
    position: relative;
    display: inline-block;
  }
  .input{
    position: absolute;
    width:100%;
    height: 100%;
    display: block;
  }
  .label{
    @include font-base-md();
    font-family: $font-primary;
    font-weight:$fontweight-regular;
    font-size: $fontsize-base-md;
    line-height:$lineheight-base-md;
    letter-spacing: $letterspacing-base-md;
    color:$color-gray-dark;
  }
</style>

