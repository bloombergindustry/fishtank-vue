<template>
  <section>
    <heading 
      level="1"
      size="HeadingMd">
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
      slider />

    <checkbox2
      v-model="val"
      disabled
      value="tt"
      label="alpha"
      switch />

    <heading 
      level="1"
      size="HeadingMd">
      FishTankCheckbox
    </heading>
    <checkbox 
      v-model="val"
      value="tt"
      label="alpha" />
    <checkbox 
      v-model="val" 
      disabled
      label="alpha" />

    <code>val: {{ val }}</code>
    <checkbox 
      :value="val2"
      label="beta"
      @change="val2 = !val2;" />
    <checkbox 
      v-model="val2"
      disabled
      value="beta" 
      label="beta" />
    <code>val2: {{ val2 }}</code>

    <checkbox 
      :value="(baseArr.indexOf(a1) > -1)"
      label="alpha"
      @change="editArray(baseArr, a1)" />
    <checkbox 
      :value="(baseArr.indexOf(b1) > -1)"
      label="beta"
      @change="editArray(baseArr, b1)" />

    <code>baseArr: {{ baseArr }}</code>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankCheckbox, FishTankCheckboxV2, FishTankHeading } from '@/index'

export default Vue.extend({
  components:{
    checkbox: FishTankCheckbox,
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