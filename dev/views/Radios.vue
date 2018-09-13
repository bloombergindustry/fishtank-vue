<template>
  <section>
    <InputRadio 
      v-model="val"
      value="alpha" 
      label="alpha"/>
    <InputRadio 
      v-model="val" 
      disabled
      value="alpha" 
      label="alpha"/>
    <InputRadio 
      v-model="val"
      value="beta" 
      label="beta"/>
    <InputRadio 
      v-model="val"
      disabled
      value="beta" 
      label="beta"/>
    {{ val }}
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
      val:"alpha",
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>