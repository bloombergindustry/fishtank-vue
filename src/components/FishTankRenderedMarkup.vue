<template>
  <div>
    <slot />
    <template
      v-if="renderedMarkup.length > 0">
      <Prism 
        language="markup"
        class="ft-rendered-markup">{{ renderedMarkup }}</Prism>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'

interface MySlot extends Node {
  outerHTML: String;
}
export default Vue.extend({
  
  components:{
    Prism
  },
  data: function(){
    return {
      renderedMarkup: ""
    }
  },
  mounted(){
    this.renderedMarkup = this.getrenderedMarkup()
  },
  methods:{
    getrenderedMarkup: function():any{
      let markup:any = ""
      if (this.$slots.default !== undefined){
        this.$slots.default.forEach(slot =>{
          markup = (slot.elm as HTMLDivElement).outerHTML
        })
      }
      return markup
    }
  }, 
})
</script>

<style>
  .ft-rendered-markup code {
    white-space: pre-wrap;
  }
</style>

