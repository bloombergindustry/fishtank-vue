<template>
  <div>
    <div>
      <div>Value pre-set to Option 3</div>
      <fish-tank-select
        id="options-select"
        label="Fish Tank Select" 
        :items="items" 
        v-model="selected"/>

      <fish-tank-select
        small
        label="Fish Tank Dropdown" 
        :items="items" 
        :width='300'
        v-model="selected"/>
    </div>
    <div>
      <fish-tank-select
        label="Not preselected" 
        placeholder="SELECT" 
        v-model="selected2" 
        :items="items" />
    </div>
  </div>

</template>
<script>
import {FishTankSelect} from '@/index'
export default {
  components:{
    FishTankSelect
  },
  name: 'SelectExample',
  data () {
    return {
      items: [
        {label: 'Option 1', value: 'OPTION1'},
        {label: 'Option 2', value: 'OPTION2'},
        {label: 'Option 3', value: 'OPTION3'},
        {label: 'Option 4', value: 'OPTION4'},
      ],
      selected: 'OPTION3',
      oldValue: {},
      newValue: {},
      selected2: null,
      buttons: ['Select Option 1', 'Select Option 2', 'Select Option 3', 'Select Option 4']
    }
  },
  methods: {
    handleChange (values) {
      this.oldValue = values.old
      this.newValue = values.new
      this.selected = values.new
    },
    handleChange2 (values) {
      this.selected2 = values.new
    }
  }
}
</script>