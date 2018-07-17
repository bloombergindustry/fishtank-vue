<template>
  <section>
    <!-- <InputCheckbox 
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
    <p>Arr: [{{arr}}]</p> -->

    <NestedInputCheckbox v-model="arrTwo" label="test checkbox group">
      <InputCheckbox 
    id="alphaTwo" val="alphaTwo"
    v-model="arrTwo"
    label="Multi Checkbox One" ref="nestedCheckbox"/>

    <InputCheckbox 
    id="betaTwo" val="albetaTwopha"
    v-model="arrTwo"
    label="Multi Checkbox One" ref="nestedCheckbox"/>

    <InputCheckbox 
    id="gammeThree" val="gammeThree"
    v-model="arrTwo"
    label="Multi Checkbox One" ref="nestedCheckbox"/>
    <p> thing</p>
    </NestedInputCheckbox>  
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  InputCheckbox,
  NestedInputCheckbox
  } from '@/index'

export default Vue.extend({
  components:{
    InputCheckbox,
    NestedInputCheckbox
  },
  data(){
    return {
      val:false,
      arr:['epsilon'],
      arrTwo:[],
      baseVal:false,
      baseArr:[]
    }
  },
  inject: {
    checkboxGroup: {
      default : {
        register() {},
        unregister() {}
      }
    }
  }
})
</script>