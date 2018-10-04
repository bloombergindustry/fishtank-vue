<template>
  <div>
    <slot />
    <Prism 
      language="markup"
      class="ft-rendered-markup">{{ renderedMarkup }}</Prism>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'

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
    getrenderedMarkup: function():string{
      console.log(this)
      let markup = '<h1>Test</h1>'
      this.$slots.default.forEach(slot =>{
        if (slot !== undefined){
          markup = slot.elm.outerHTML 
        }
      })
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

