<template>
  <section>
    <InputCheckbox 
      id="single"
      v-model="val"
      label="Single Checkbox"/>
    Value: {{ val }}
    <hr>
    <InputCheckbox 
      id="alpha" 
      v-model="arr"
      val="alpha"
      label="Multi Checkbox One - alpha"/>
    <InputCheckbox 
      id="beta"
      v-model="arr"
      val="beta" 
      disabled="disabled"
      label="Multi Checkbox Two - beta - disabled">
      <slot>
        <p>Test slot content within a checkbox</p>
      </slot>
    </InputCheckbox>
    <InputCheckbox 
      id="gamma"
      v-model="arr" 
      val="gamma" 
      label="Multi Checkbox Three - gamma"/>
    <InputCheckbox 
      id="epsilon" 
      v-model="arr"
      val="epsilon" 
      disabled="true"  
      label="Multi Checkbox Three - epsilon"/>
    <p>Arr: {{ arr }}</p>

    <NestedInputCheckboxGroup 
      v-model="arrTwo" 
      label="test checkbox group">
      <NestedInputCheckbox 
        id="alphaTwo"
        v-model="arrTwo"
        val="alphaTwo"
        label="Multi Checkbox One - alphaTwo"/>

      <NestedInputCheckbox 
        id="betaTwo"
        v-model="arrTwo"
        val="betaTwo"
        label="Multi Checkbox One - betaTwo"/>

      <NestedInputCheckbox 
        id="gammeThree"
        v-model="arrTwo"
        val="gammeThree"
        label="Multi Checkbox One - gammeThree"/>
    </NestedInputCheckboxGroup> 
    <p>Arr: {{ arrTwo }}</p> 
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  InputCheckbox,
  NestedInputCheckbox,
  NestedInputCheckboxGroup
  } from '@/index'

export default Vue.extend({
  components:{
    InputCheckbox,
    NestedInputCheckbox,
    NestedInputCheckboxGroup
  },
  data(){
    return {
      val:false,
      arr:['epsilon'],
      arrTwo:[],
      arrThree:[],
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