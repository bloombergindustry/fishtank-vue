<template>
  <section>
    <InputText
      :value="val"
      label="Text Input Type"
      type="text"/>
    <FishTankRenderedMarkup>
      <InputText
        :value="val"
        label="Text Input Type"
        type="text"/>
    </FishTankRenderedMarkup>
    <InputText
      :value="val"
      label="Password Input Type"
      type="password"/>
    <InputText
      :value="val"
      label="Number Input Type"
      type="number"/>
    <InputText
      :value="val"
      label="Input Error Example"
      type="number"
      error="Error Message"/>
    <!-- <InputText
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
      type="url"/> -->
    <pre>{{ val }}</pre>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputText, FishTankRenderedMarkup } from '@/index'

export default Vue.extend({
  components:{
    InputText,
    FishTankRenderedMarkup
  },
  data(){
    return {
      val:""
    }
  }
  
})
</script>