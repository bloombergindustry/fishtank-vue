<template>
  <section>
    <inputtext
      :value="text"
      @input="text = $event"
      label="Text Input Type"
      placeholder="Text Input Type"
      type="text">
      <slot name="leftIcon">
        <search24 />
      </slot>
    </inputtext>
    <inputtext
      v-model="password"
      label="Password Input Type"
      type="password"/>
    <inputtext
      v-model="number"
      label="Number Input Type"
      type="number"
      error />
    <inputtext
      label="Input Required Example"
      type="number"
      required
      @reset="clearError" />
    <inputtext
      v-model="val"
      label="Input Number Error Example"
      type="number"
      :error="error"
      @reset="clearError" />
    <!--
    <InputText
      :value="val"
      label="Telephone Input Type"
      type="tel"/>
    <InputText
      :value="val"
      label="Search Input Type"
      type="search"/>
    <InputText
      :value="val"
      label="Email Input Type"
      type="email"/>
    <InputText
      :value="val"
      label="URL Input Type"
      type="url"/>-->
    <h3> List of Input Values</h3>
    <p><b>Text Input Value : </b> {{text}} </p>
    <p><b>Password Input Value : </b> {{password}} </p>
    <p><b>Number Input Value : </b> {{number}} </p>
    <p><b>Number Error Input Value : </b> {{val}} </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputText } from '@/index'
import { Search24 } from '@fishtank/icons-vue'

export default Vue.extend({
  components:{
    inputtext:InputText,
    search24: Search24
  },
  data(){
    return {
      val:"",
      text: "",
      password: "",
      number: "",
      text_area: "",
      error:"error msg"
    }
  }, 
  methods:{
    clearError(){
      this.error=""
    }
  }
  
})
</script>