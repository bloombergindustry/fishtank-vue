<template>
  <div>
    <Autocomplete
      id="autocomplete_example"
      label="Autocomplete Label"
      orientation="ltr"
      url="/some_autocomplete_endpoint"
      v-model="selected" />
    <div v-if="selected">{{selected.label}}</div>
  </div>
</template>
<script>
const moxios = require('moxios')
import { FishTankLookup } from '@/index';
export default {
  components:{
    Autocomplete:FishTankLookup
  },
  data () {
    return {
      selected: null,
      exampleItems: [
            { label: "Some item 1", value: "Some item 1" },
            { label: "Some item 2", value: "Some item 2" },
            { label: "Some item 3", value: "Some item 3" },
            { label: "Some item 4", value: "Some item 4" },
            { label: "Some item 5", value: "Some item 5" }
          ]
    }
  },
  created () {
    moxios.install()
    moxios.stubRequest(/\/some_autocomplete_endpoint\?query=.+$/, {
      status: 200,
      response: {
        "data": {
          "items": [
            { label: "Some item 1", value: "Some item 1" },
            { label: "Some item 2", value: "Some item 2" },
            { label: "Some item 3", value: "Some item 3" },
            { label: "Some item 4", value: "Some item 4" },
            { label: "Some item 5", value: "Some item 5" }
          ]
        }
      }
    })

    // Mock empty request
    moxios.stubRequest(/\/some_autocomplete_endpoint\?query=$/, {
      status: 200,
      response: {
        "data": {
          "items": []
        }
      }
    })
  }
}
</script>