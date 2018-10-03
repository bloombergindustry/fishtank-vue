<template>
  <div>
    <FishTankButtonGroup>
      <FishTankBGButton
        v-model="bgValue"
        value="All"
        label="All"/>
      <FishTankBGButton
        v-model="bgValue"
        value="Members"
        label="Members"/>
      <FishTankBGButton
        v-model="bgValue" 
        value="Staff"
        label="Staff"/>
    </FishTankButtonGroup>
    <br>
    <FishTankButtonGroup small>
      <FishTankBGButton
        v-model="bgValueAltBeta"
        value="All"
        label="All"/>
      <FishTankBGButton
        v-model="bgValueAltBeta"
        value="Members"
        label="Members"/>
      <FishTankBGButton
        v-model="bgValueAltBeta" 
        value="Staff"
        label="Staff"/>
    </FishTankButtonGroup>

    <div v-if="bgValue ==='All'"> All Tab</div>
    <div v-if="bgValue ==='Members'">Members Tab</div>
    <div v-if="bgValue ==='Staff'">Staff Tab</div>
    <div v-if="bgValue ==='Agency'">Agency Tab</div>
    <div v-if="bgValue ==='Lobbyist'">Lobbyist Tab</div>
    <div v-if="bgValue ===' Contractors'">Contractors Tab</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {FishTankButtonGroup, FishTankButtonGroupButton as FishTankBGButton} from '@/index'

export default Vue.extend({
  components:{
    FishTankButtonGroup,
    FishTankBGButton
  },
  data: function(){
    return {
      bgValue:"All",
      bgValueAltBeta:"Members",
    }
  }
})
</script>
