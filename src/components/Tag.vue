<template>
  <span
    :class= "[activeClasses, disabledClasses]"
    :tabindex="disabled ? -1 : 0"
    role="button" 
    @click="changeState(label)"
  >
    <p class="tag--text">{{ label }}</p>
    <CloseIcon 
      v-if="close" 
      class="tag-close-icon" />
    <ChevronDownIcon 
      v-if="multiselect" 
      :class="[disabled ? 'tag-collapse-icon' : (dropdownState? 'tag-expand-icon' : 'tag-collapse-icon')]" /> 
  </span>
</template>

<script lang="ts">
  import Vue from "vue"
  import { 
    CloseSml24 as CloseIcon,
    ChevronSmlDown24 as ChevronDownIcon
  } from "@fishtank/icons-vue"

  export default Vue.extend({
    name: 'Tag',
    components:{
      CloseIcon,
      ChevronDownIcon
    },
    model:{
      prop: 'checked',
      event:'change'
    },
    props:{
      label:{
        type: String,
        default: "Sample Text"
      },
      disabled:{
        type: Boolean,
        default: false
      },
      close:{
        type: Boolean,
        default: false
      },
      checked:{
        type:Boolean,
        default:true
      },
      multiselect:{
        type:Boolean,
        default:false
      },
      tabIndex:{
        default:0,
        required:false,
        type:Number
      }
    },
    data: function () {
      return {
        activeState: this.checked,
        dropdownState: false
      }
    },
    computed: {
      disabledClasses: function(){
        return this.disabled? `tag-${this.close ? '-removeable-' : ''}-disabled`:null
      },
      activeClasses: function(){
        if (this.disabled) return
        return this.activeState ? 'tag--active' : 'tag--inactive'
      }
    },
    methods: {
      changeState(tag:String):void{
        if (this.disabled) return
        this.activeState = !(this.activeState)
        if (this.multiselect){
          this.showOptions()
        }
        if (this.close){
          this.$emit('remove-tag', tag)
        } else {
          this.$emit('change-tag', {state:this.activeState, label:tag})
        }
      },
      removeTag(tag: String){
        if (this.disabled) return
        this.$emit('remove-tag',{tag: tag, model: this})
      },
      showOptions(){
        if (this.disabled) return
         this.dropdownState = !(this.dropdownState)  
      }
    }
  })
</script>
