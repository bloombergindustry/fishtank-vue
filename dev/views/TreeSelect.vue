<template>
  <div>
    <p>Fishtank's Vue-treeselect component is located in a seperate 
      <a 
        href="https://www.npmjs.com/package/@fishtank/vue-treeselect" 
        target="_blank" >NPM module</a>, and 
      <a 
        href="https://github.com/bloombergbna/fishtank-vue-treeselect" 
        target="_blank">git repo</a> </p>
    <FishTankTreeSelect
      :options="treeArr"
      :max-height="null"
      :hide-control="true"
      :dropdownpopover="false"
      :multiple="true"
      :collapse-menu-padding="true"
      v-model="treeVal" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {FishTankTreeSelect} from '@fishtank/vue-treeselect'
import '@fishtank/vue-treeselect/dist/vue-treeselect.css'

export default Vue.extend({
  components:{
    FishTankTreeSelect
  },
  data: function(){
    return {
      treeVal:[],
      treeArr:[{
        label:"label",
        id:"1",
        children:[
          {
            label:"label child",
            id:"2",
            children:[
              {
                label:"label child",
                id:"4"
              }
            ]
          },
          {
            label:"label child",
            id:"3",
            children:[]
          }
        ]
      }]
    }
  }
})
</script>
