<template>
  <section>
    <fish-tank-radio-group>
      <FishTankRadio 
        v-model="val"
        value="alpha" 
        label="alpha"
        name="alpha"/>
      <FishTankRadio 
        v-model="val" 
        disabled
        value="alpha" 
        label="alpha"
        name="alpha"/>
      <FishTankRadio 
        v-model="val"
        value="beta" 
        label="beta"
        name="beta"/>
      <FishTankRadio 
        v-model="val"
        disabled
        value="beta" 
        label="beta"
        name="beta"/>
      {{ val }}
    </fish-tank-radio-group>
    <hr>
    <fish-tank-radio-group>
      <FishTankRadio 
        v-model="valTwo"
        value="gamma" 
        label="gamma"
        name="gamma"
      />
      <FishTankRadio 
        v-model="valTwo"
        value="delta" 
        label="delta"
        name="delta"
      />
    </fish-tank-radio-group>
    <FishTankRadio 
        v-model="valTwo"
        value="theta" 
        label="theta"
        name="theta"
      />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankRadio,FishTankRadioGroup } from '@/index'

export default Vue.extend({
  components:{
    FishTankRadio,
    FishTankRadioGroup,
  },
  data(){
    return {
      val:"alpha",
      valTwo:null,
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>