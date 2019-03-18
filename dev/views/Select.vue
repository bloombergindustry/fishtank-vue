<template>
  <div>
    <div>
      <div>Value pre-set to Option 3</div>
      <fish-tank-select
        label="Fish Tank Dropdown" 
        :items="items" 
        v-model="selected"/>
      <div>Old Value: {{oldValue.label}}</div>
      <div>New Value: {{newValue.label}}</div>
    </div>
    <div style="margin-top: 12px;">
      <div>Dynamically change selected value</div>
      <div style="display: flex;">
        <template v-for="(button, index) in buttons">
          <button
            :key="index"
            @click="selected2 = items[index]">
            {{ button }}
          </button>
        </template>
      </div>
      <FishTankSelect 
        :items="items" 
        :selected="selected2"
        @change=handleChange2 />
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
      selected2: {label: 'Option 1', value: 'OPTION1'},
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