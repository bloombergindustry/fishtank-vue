<template>
  <section>
    <InputText
      v-model="val"
      label="Text Input Type"
      type="text"/>
    <!-- <FishTankRenderedMarkup>
      <InputText
        :value="val"
        label="Text Input Type"
        type="text"/>
    </FishTankRenderedMarkup> -->
    <InputText
      v-model="val"
      label="Password Input Type"
      type="password"/>
    <InputText
      v-model="val"
      label="Number Input Type"
      type="number"/>
    <InputText
      v-model="val"
      label="Input Error Example"
      type="number"
      error="Error Message"/>
    <InputText
      :maxheight="170"
      v-model="val"
      label="TextArea Input Type - Max Height 170px"
      type="textarea"/>
     <!--InputText
      v-model="val"
      label="TextArea Input Type - No Max Height"
      type="textarea"/--> 
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
    <pre>{{ val }}</pre>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputText, 
// FishTankRenderedMarkup 
} from '@/index'

export default Vue.extend({
  components:{
    InputText,
    // FishTankRenderedMarkup
  },
  data(){
    return {
      val:""
    }
  }
  
})
</script>