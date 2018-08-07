<template>
  <section>
    <InputRadio 
      v-model="val"
      value="alpha" 
      label="alpha"/>
    <InputRadio 
      v-model="val"
      value="beta" 
      label="beta"/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputRadio } from '@/index'

export default Vue.extend({
  components:{
    InputRadio,
  },
  data(){
    return {
      val:null,
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>