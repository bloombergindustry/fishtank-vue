<template>
  <section>
    <checkbox 
      v-model="val"
      value = "tt"
      label="alpha"/>
    <checkbox 
      v-model="val" 
      disabled
      label="alpha"/>

      <code>val: {{ val }}</code>
    <checkbox 
      :value="val2"
      @change="val2 = !val2;"
      label="beta"/>
    <checkbox 
      v-model="val2"
      disabled
      value="beta" 
      label="beta"/>
      <code>val2: {{ val2 }}</code>

    <checkbox 
      :value="(baseArr.indexOf(a1) > -1)"
      @change="editArray(baseArr, a1)"
      label="alpha"/>
    <checkbox 
      :value="(baseArr.indexOf(b1) > -1)"
      @change="editArray(baseArr, b1)"
      label="beta"/>

    <code>baseArr: {{ baseArr }}</code>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankCheckbox } from '@/index'

export default Vue.extend({
  components:{
    checkbox: FishTankCheckbox,
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