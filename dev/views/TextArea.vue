<template>
  <section>
    <tarea
      v-model="text_area"
      :maxheight="170"
      placeholder="Text Area Type Input"
      label="TextArea Input Type - Max Height 170px" />
    <tarea
      v-model="text_area"
      required
      :maxheight="170"
      placeholder="Text Area Type Input"
      label="TextArea Input Type - Max Height 170px" 
      :orientation="orientation" />
    <radiolist 
      v-model="orientation" 
      :items="orientationItem"
      label="Example" 
      name="example" />
    <tarea
      :value="text_area"
      label="TextArea Input Type - No Max Height"
      @input="text_area = $event" />

    <p class="text-area-example">
      <b>Text Area Input Value : </b> {{ text_area }}
    </p>
  </section>
</template>

<script lang="ts">
import { FishTankTextArea, FishTankRadioList } from '@/index'

import Vue from 'vue'
export default Vue.extend({
  components:{
    tarea:FishTankTextArea,
    radiolist:FishTankRadioList
  },
  data(){
    return {
      text_area:"",
      orientation:"rtl",
      orientationItem:[
        { label: "Right to Left", value: "rtl" },
        { label: "Left to Right", value: "ltr" }]
    }
  }
})
</script>

<style>
.text-area-example {
  white-space: pre-line;
}
</style>
