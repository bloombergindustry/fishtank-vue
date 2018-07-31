<template>
  <section>
    <InputSwitch 
      id="test-id"
      :val="val"
      :value="val"
      label="Val"
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
      arr:['epsilon'],
      baseVal:false,
      baseArr:[]
    }
  }
  
})
</script>