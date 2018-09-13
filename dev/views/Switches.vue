<template>
  <section>
    <InputSwitch 
      v-model="val"
      label="Val"
    />
    <InputSwitch 
      id="test-id2"
      v-model="val"
      label="Val"
      disabled
    />
    <InputSwitch 
      id="test-id3"
      v-model="val2"
      label="Val2"
    />
    <InputSwitch 
      id="test-id4"
      v-model="val2"
      label="Val2"
      disabled
    />

    <InputSwitch 
      id="test-id5"
      v-model="baseArr"
      value="ValAlpha"
      label="Val3"
    />
    <InputSwitch 
      id="test-id6"
      v-model="baseArr"
      :value="popVal"
      label="Object to Push/Pop from array"
    />
    <InputSwitch 
      id="test-id7"
      v-model="baseArr"
      :value="popValTwo"
      label="Number to Push/Pop from array"
    />
    <code>Val: {{ val }}</code>
    <br>
    <code>Val2: {{ val2 }}</code>
    <br>
    <code>baseArr: {{ baseArr }}</code>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputSwitch } from '@/index'

export default Vue.extend({
  components:{
    InputSwitch,
  },
  data(){
    return {
      val:false,
      val2:true,
      popVal:{foo:"Bar"},
      popValTwo:12345,
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>