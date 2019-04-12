<template>
  <section>
    <inputtext
      v-model="text"
      label="Text Input Type"
      type="text" />
    <inputtext
      v-model="password"
      label="Password Input Type"
      type="password" />
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
    <inputtext
      v-model="text_area"
      :maxheight="170"
      label="TextArea Input Type - Max Height 170px"
      type="textarea" />
    <inputtext
      v-model="text_area"
      label="TextArea Input Type - No Max Height"
      type="textarea" />
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
    <p><b>Text Area Input Value : </b> {{text_area}} </p>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputText } from '@/index'

export default Vue.extend({
  components:{
    inputtext:InputText,
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