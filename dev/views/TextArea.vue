<template>
  <section>
    <tarea
      v-model="text_area"
      :maxheight="170"
      label="TextArea Input Type - Max Height 170px" />
    <tarea
      :value="text_area"
      @input="text_area = $event"
      label="TextArea Input Type - No Max Height" />

    <p class="text-area-example"><b>Text Area Input Value : </b> {{ text_area }} </p>
  </section>
</template>

<script lang="ts">
import { FishTankTextArea } from '@/index'

import Vue from 'vue'
export default Vue.extend({
  components:{
    tarea:FishTankTextArea
  },
  data(){
    return {
      text_area:""
    }
  }
})
</script>

<style>
.text-area-example {
  white-space: pre-line;
}
</style>
