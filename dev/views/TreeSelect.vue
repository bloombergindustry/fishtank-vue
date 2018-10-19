<template>
  <div>
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
import {FishTankTreeSelect} from '@/index'

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
