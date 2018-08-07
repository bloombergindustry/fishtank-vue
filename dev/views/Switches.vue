<template>
  <section>
    <InputSwitch 
      id="test-id"
      :val="val"
      :value="val"
      label="Val"
    />
    <InputSwitch 
      id="test-id2"
      :val="val"
      :value="val"
      label="Val"
      :disabled=true
    />
    <InputSwitch 
      id="test-id3"
      :val="val2"
      :value="val2"
      label="Val2"
    />
    <InputSwitch 
      id="test-id4"
      :val="val2"
      :value="val2"
      label="Val2"
      :disabled=true
    />
    <code>{{ val }}</code>
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
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>