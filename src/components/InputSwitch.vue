<template>
  <div  
    class="ft-switch">
    <label 
      :for="id" 
      class="ft-input-checkbox-label">
      <input 
        :id="id" 
        :disabled="disabled"
        :value="val"
        v-model="checked"
        type="checkbox" 
        v-on="listeners">
      <div class="ft-input-checkbox-wrap">
        <div class="ft-input-checkbox-target"/>
      </div>
      <div class="label-content">
        <slot v-if="label === null"/>
        <span v-else>
          {{ label }}
        </span>
      </div>
    </label> 
  </div>
</template>
<script lang="ts">

function handleFirstTab(e) {
    if (e.keyCode === 9) { // tab key, user is a keyboard user
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}
window.addEventListener('keydown', handleFirstTab);

import Vue, { VNode }from 'vue'
export default Vue.extend({
  name:"FtSwitch",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props:{
    value: {
      default:"",
      required:true,
      type:[String, Number, Boolean, Array, Object, Number],
    },
    disabled:{
      type:[String , Boolean],
      default:false,
      required:false
    },
    modelValue:{
      type:Object,
      default:()=>{}
    },
    label:{
      type:String,
      default:"Please provide a label",
      required:true
    },
    id:{
      type:String,
      default:null
    },
    trueValue:{
      type:Boolean,
      default:true
    },
    falseValue:{
      type:Boolean,
      default:false
    },
    inherited:{
      type:Boolean,
      default:false,
      required:false
    },
    val: {
      type:[String, Number, Boolean, Array, Object, Number],
      default:"",
      required:true
    } 
  },
  data(){
    return {
      checkProxy:false
    }
  },
  inject: {
    checkboxGroup: {
      default : ()=>{}
    }
  },
  computed:{
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
    }
  },
  mounted(){
    // this.isInCheckboxGroup = this.checkboxGroup.checkboxGroupModel !== undefined ? true : false
    // if (this.isInCheckboxGroup){
    //   this.checkboxGroup.register(this)
    // }
  },
  destroyed() {
    // if (this.isInCheckboxGroup){
    //   this.checkboxGroup.unregister(this)
    // }
  },
  methods:{
    updateFtCheck(event){
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
          if (isChecked) {
            this.modelValue.push(this.value)
          } else {
            this.modelValue.splice(this.modelValue.indexOf(this.value), 1) 
          }
          this.$emit('input', this.modelValue)
        } else {
          this.$emit('change', isChecked ? this.trueValue : this.falseValue)
        }
    }
  }
})
</script>

