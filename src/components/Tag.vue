<template>
  <div @click="changeState()"
     :class= classes()
  >
    <span class="tag-container">{{text}} <CloseIcon v-if="close"></CloseIcon></span> 
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { CloseSml24 as CloseIcon} from "@fishtank/icons-vue"

  export default {
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
      }
    },
    data () {
      return {
        activeState: true
      }
    },
    methods: {
      changeState() {
        if(!this.close){
          this.activeState = !(this.activeState);
        }
      },
      isActive(){
        return this.activeState;
      },
      isDisabled(){
        return this.disabled;
      },
      isRemoveable(){
        return this.close;
      },
      classes(){
        if(this.isDisabled()){
           if(this.isRemoveable()){
              return 'tag--removeable--disabled';
           }else{
            return 'tag--disabled';
           }
        }else if(this.isRemoveable()){
          return 'tag--removeable';
        }else if(this.isActive()){
          return 'tag--active';
        }else{
          return 'tag--inactive';
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./src/styles/components/_tags";

</style>
