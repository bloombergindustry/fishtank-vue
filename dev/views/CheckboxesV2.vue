<template>
  <section>
    <heading 
      level="1"
      size="headingMd">
      FishTankCheckboxV2
    </heading>
    <checkbox2
      v-model="val"
      value="tt"
      label="alpha" />
    
    <checkbox2
      v-model="val"
      value="tt"
      label="alpha" 
      disabled />

    <checkbox2
      v-model="val"
      value="tt"
      label="alpha"
      slider />

    <checkbox2
      v-model="val"
      disabled
      value="tt"
      label="alpha"
      switch />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankCheckboxV2, FishTankHeading } from '@/index'

export default Vue.extend({
  components:{
    checkbox2:FishTankCheckboxV2,
    heading:FishTankHeading
  },
  data(){
    return {
      val:null,
      val2:true,
      arr:['epsilon'],
      baseVal:false,
      baseArr:[],
      a1:"alpha",
      b1:"beta",
    }
  },
  methods:{
    editArray(arr:any, v:any){
      arr.indexOf(v) < 0 ? arr.push(v) : arr.splice(arr.indexOf(v), 1)
    }
  }
  
})
</script>