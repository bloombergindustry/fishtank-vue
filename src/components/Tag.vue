<template>
  <span @click="changeState()"
        :class= classes()
  >
    <p class="tag--text">{{ text }}</p>
    <CloseIcon @click="removeTag()" class="tag-close-icon" v-if="close"/>
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
    props:{
      text:{
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
    },
    data: function () {
      return {
        activeState: true
      }
    },
    computed: {
       isActive: function () { return this.activeState },
       isDisabled: function() { return this.disabled },
       isRemoveable: function() { return this.close }
    },
    methods: {
      changeState() {
        if(!this.close){
          this.activeState = !(this.activeState);
          this.$emit('change', this.activeState);
        }
      },
      classes(){
        if(this.isDisabled){
           if(this.isRemoveable){
              return 'tag--removeable--disabled';
           }else{
            return 'tag--disabled';
           }
        }else if(this.isRemoveable){
          return 'tag--removeable';
        }else if(this.isActive){
          return 'tag--active';
        }else{
          return 'tag--inactive';
        }
      },
      removeTag(){
        this.$emit('removetag',this.index)
      }
    }
  })
</script>

<style lang="scss">
  @import "./src/styles/components/_tags";

</style>
