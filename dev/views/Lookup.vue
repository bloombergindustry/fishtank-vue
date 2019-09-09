<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <autocomplete
      id="autocomplete_example"
      label="Autocomplete Label"
      :items="items_alt"
      v-model="selected" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <autocomplete
      id="autocomplete_example"
      label="Autocomplete Label"
      :items="items"
      v-model="selected" />
    <div v-if="selected">
      {{ selected.label }}
    </div>
  </div>
</template>
<script>
const moxios = require('moxios')
import { FishTankLookup } from '@/index'
const data =  require('../../assets/lookup-data.json')

export default {
  components:{
    autocomplete:FishTankLookup
  },
  data () {
    return {
      selected: null,
      items: data.results,
      items_alt:[
            { text: "Some item 1", value: "Some item 1" },
            { text: "Some item 2", value: "Some item 2" },
            { text: "Some item 3", value: "Some item 3" },
            { text: "Some item 4", value: "Some item 4" },
            { text: "Some item 5", value: "Some item 5" }
          ]
    }
  }
}
</script>