<template>
  <section>
    <InputCheckbox 
    id="single"
    label="Single Checkbox"
    v-model="val"/>
    <hr>
    <InputCheckbox 
    id="alpha" val="alpha"
    v-model="arr"
    label="Multi Checkbox One"/>
    <InputCheckbox 
    id="beta"
    val="beta"
    v-model="arr" 
    disabled="true"
    label="Multi Checkbox Two">
      <slot>
        <p>Test slot content</p>
      </slot>
    </InputCheckbox>
    <InputCheckbox 
    id="gamma" val="gamma" 
    v-model="arr" 
    label="Multi Checkbox Three"/>
    <InputCheckbox 
    id="epsilon" 
    val="epsilon" 
    disabled="true" 
    v-model="arr" 
    label="Multi Checkbox Three"/>
    <p>Arr: [{{arr}}]</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputCheckbox } from '@/index'

export default Vue.extend({
  components:{
    InputCheckbox
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