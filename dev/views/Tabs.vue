<template>
  <div>
    <FishTankText
      style="width: 100%; margin-top: 24px; margin-bottom: 24px;"
      size="baseLg"
      font="accent"
      :bold="true"
      align="center"
    > The Fish Tank Tab Component</FishTankText>

    <FishTankTabs
      :items ="tabs"
    ></FishTankTabs>

    <br/>
    <br/>
    <br/>
    <br/>

    <FishTankTabs
      :items ="tabs"
      :divider="true"
    ></FishTankTabs>

    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  FishTankText,
  FishTankTabs
} from '@/index'


import { 
  Alert24
  } from "@fishtank/icons-vue"


export default Vue.extend({
  components: {
    FishTankText,
    FishTankTabs,
    Alert24
  },

  data: function(){
    return{
      tabs: [ 
        {label: 'Company Inbox', name: 'Company Inbox'}, 
        {label: 'All Tracking', name: 'All Tracking' }, 
        {label: 'My Assignments', name: 'My Assignments', disabled: true},
        {label: 'Needs Review', name: 'Needs Review'},
        {label: 'Not Tracking', name: 'Not Tracking', hidden: true},
        {label: 'People', name: 'People'},
        {label: 'Search', name: 'Search'}
      ]
    }
  }
})
</script>

