<template>
  <div>
    <bgroup>
      <gbutton
        v-model="bgValue"
        value="All"
        label="All"
        name="options" />
      <gbutton
        v-model="bgValue"
        value="Members"
        label="Members"
        name="options" />
      <gbutton
        v-model="bgValue" 
        value="Staff"
        label="Staff"
        name="options" />
    </bgroup>
    <br>
    <bgroup small>
      <gbutton
        v-model="bgValueAltBeta"
        value="All"
        label="All"
        name="options2" />
      <gbutton
        v-model="bgValueAltBeta"
        value="Members"
        label="Members"
        name="options2" />
      <gbutton
        v-model="bgValueAltBeta" 
        value="Staff"
        label="Staff"
        name="options2" />
    </bgroup>

    <div v-if="bgValue ==='All'"> 
      All Tab 
    </div>
    <div v-if="bgValue ==='Members'">
      Members Tab
    </div>
    <div v-if="bgValue ==='Staff'">
      Staff Tab
    </div>
    <div v-if="bgValue ==='Agency'">
      Agency Tab
    </div>
    <div v-if="bgValue ==='Lobbyist'">
      Lobbyist Tab
    </div>
    <div v-if="bgValue ===' Contractors'">
      Contractors Tab
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {FishTankButtonGroup, FishTankButtonGroupButton as FishTankBGButton} from '@/index'

export default Vue.extend({
  components:{
    bgroup:FishTankButtonGroup,
    gbutton:FishTankBGButton,
  },
  data(){
    return {
      bgValue:"",
      bgValueAltBeta:"Members",
    }
  }
})
</script>
