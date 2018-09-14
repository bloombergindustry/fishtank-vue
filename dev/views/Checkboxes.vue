<template>
  <section>
    <FishTankCheckbox 
      v-model="val"
      value="alpha" 
      label="alpha"/>
    <FishTankCheckbox 
      v-model="val" 
      disabled
      value="alpha" 
      label="alpha"/>
    <FishTankCheckbox 
      v-model="val2"
      value="beta" 
      label="beta"/>
    <FishTankCheckbox 
      v-model="val2"
      disabled
      value="beta" 
      label="beta"/>
    <code>{{ val }}</code>

    <FishTankCheckbox 
      v-model="baseArr"
      value="alpha" 
      label="alpha"/>
    <FishTankCheckbox 
      v-model="baseArr"
      value="beta" 
      label="beta"/>

    <code>{{ baseArr }}</code>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankCheckbox } from '@/index'

export default Vue.extend({
  components:{
    FishTankCheckbox,
  },
  data(){
    return {
      val:null,
      val2:true,
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>