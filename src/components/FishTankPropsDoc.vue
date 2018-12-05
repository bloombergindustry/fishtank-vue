<template>
  <div>
    <table 
      v-if="layout === 'table'" 
      class="table-card">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(propObj, namekey, indexA) in properties">
          <template v-if="(propObj.description !== undefined)" >
            <tr :key="`p+${indexA}`">
              <td>{{ namekey }}</td>
              <td>{{ propObj['type'].name }}</td>
              <td>{{ propObj['default'] }}</td>
              <td>{{ propObj['description'] }}</td>
              <td>
                <template v-if="propObj.hasOwnProperty('required') === true">
                  {{ propObj['required'] }}
                </template>
                <template v-if="propObj.hasOwnProperty('required') === false">
                  false
                </template>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
    <template v-if="layout === 'list'">
      <h4>{{ namekey }}</h4>
      <template v-for="(prop, key, index) in propObj"> 
        <template v-if="key === 'type'">
          <div :key="`q+${index}`">{{ key }}: {{ prop.name }}</div>
        </template>
        <template v-else> 
          <div :key="`q+${index}`">{{ key }}: {{ prop }}</div>
        </template>
      </template>
    </template>
  </div>  
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name:"FishTankPropsDocs",
  props:{
    properties:{
      type: Object,
      required:true,
      default: ()=>{}
    },
    layout:{
      type: String,
      required:true,
      default: "list"
    }
  }
})
</script>