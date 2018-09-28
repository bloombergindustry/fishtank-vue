<template>
  <span class = "ft-input-tag-remove" >
    <transition name="list-fade">
      <Tag
        :text = "label"
        :label="label" 
        close 
        v-on="listeners"/>
    </transition>
  </span>
</template>

<script lang="ts">

  import Vue from "vue"
  import InputText from "./InputText.vue"
  import Tag from "./Tag.vue"
  export default Vue.extend({
    name: 'InputTagRemove',
    components:{
      InputText,
      Tag
    },
    model:{
      prop:"multiVals",
      events:"updateTags"
    },
    props:{
      value:{
        type:[String,Boolean,Object,Number],
        default:null
        },
      modelValue: {
        type:[String,Object, Number,Boolean],
        default: ""
      },
      multiVals:{
        type:Array,
        default:()=>[]
      },
      label:{
        type:String,
        default:null,
        require
      },
      disabled:{
        type:Boolean,
        required:false,
        default:false
      }
    },
    data(){
      return {
        isActive: false
      }
    },
    computed:{
      listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        change: ($event: MouseEvent) => {
          if (this.disabled) return 
          this.$emit("removeTag",this.label)
        }
      }
    },
  },
})
</script>
