<template>
  <span
    :class= "classes"
    tabindex="0"
    role="button" 
    @click="changeState()"
  >
    <p 
      class="tag--text">{{ label }}</p>
    <CloseIcon 
      v-if="close" 
      class="tag-close-icon" 
      @click="removeTag(label)"/>
  </span>
</template>

<script lang="ts">
  import Vue from "vue"
  import { CloseSml24 as CloseIcon} from "@fishtank/icons-vue"

  export default Vue.extend({
    name: 'Tag',
    components:{
      CloseIcon
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
        activeState: true
      }
    },
    computed: {
       isActive: function () { return this.activeState },
       isDisabled: function() { return this.disabled },
       isRemoveable: function() { return this.close },
       classes(){
        if(this.isDisabled){
           if(this.isRemoveable){
              return 'tag--removeable--disabled'
           }else{
            return 'tag--disabled'
           }
        }else if(this.isRemoveable){
          return 'tag--removeable'
        }else if(this.isActive){
          return 'tag--active'
        }else{
          return 'tag--inactive'
        }
      }
    },
    methods: {
      changeState() {
        this.activeState = !(this.activeState)
        this.$emit('change', this.activeState)
      },
      removeTag(tag: String){
        this.$emit('removetag',tag)
      }
    }
  })
</script>
