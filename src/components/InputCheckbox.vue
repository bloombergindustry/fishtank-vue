<template>
  <div 
    :class="value ? 'ft-input-checkbox--checked' : 'ft-input-checkbox--unchecked'"
    class="ft-input-checkbox"
  >
    <label 
      class="ft-input-checkbox__label"
    >
      <input 
        :id="id" 
        :disabled="disabled"
        :value="val"
        v-model="checked"
        class="ft-input-checkbox__native" 
        type="checkbox"
        v-on="listeners">
      <CheckboxSelected 
        v-if="isChecked"
        class="ft-input-checkbox__checkbox ft-svg-selected"
      />
      <CheckboxUnselected 
        v-else
        class="ft-input-checkbox__checkbox ft-svg-unselected"
      />
      <div
        v-if="label" 
        class="ft-input-checkbox__label-content">
        <p class="ft-input-checkbox__label-content__label">{{ label }}</p>
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

export default Vue.extend({
  components: {
    CheckboxSelected,
    CheckboxUnselected
  },
  props: {
    disabled:{
      type:[String, Boolean],
      default:false
    },
    label:{
      type:String,
      default:"",
      required:true
    },
    id: {
      type:String,
      default:"",
      required:true
    },
    value: {
      default:"",
      required:true,
      type:[String, Number, Boolean, Array, Object, Number],
    },
    val: {
      type:[String, Number, Boolean, Array, Object, Number],
      default:"",
      required:false
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
          this.$emit("input", this.checkProxy)
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
      let getchecked:any = this.value
      if (Array.isArray(this.value)){
        getchecked = this.value.indexOf(this.val) >= 0
      }
      return getchecked
    }
  }
  // extends: BaseInput,
  // props: {
  //   disabled:{
  //     type:[String, Boolean],
  //     default:false
  //   },
  //   label:{
  //     type:String,
  //     default:"",
  //     required:true
  //   },
  //   id: {
  //     type:String,
  //     default:"",
  //     required:true
  //   },
  //   value: {
  //     default:"",
  //     required:true,
  //     type:[String, Number, Boolean, Array, Object, Number],
  //   },
  //   val: {
  //     type:[String, Number, Boolean, Array, Object, Number],
  //     default:"",
  //     required:false
  //   }  
  // },
  // computed: {
  //   isChecked: function(){
  //     let getchecked:any = this.value
  //     if (Array.isArray(this.value)){
  //       getchecked = this.value.indexOf(this.val) >= 0
  //     }
  //     return getchecked
  //   }
  // }
})
</script>
