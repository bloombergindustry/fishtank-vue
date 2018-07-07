<template>
  <div>
    <input 
      :id="id" 
      :disabled="disabled"
      :value="val"
      v-model="checked"
      type="checkbox"
      v-on="listeners">
    <slot/>
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "BaseInput",
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
        input: ($event: MouseEvent) => {
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
    }
  }
})
</script>