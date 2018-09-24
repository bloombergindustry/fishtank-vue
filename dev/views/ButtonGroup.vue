<template>
  <div>
    <FishTankButtonGroup v-model="bgValue">
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
      <FishTankBGButton 
        v-model="bgValue"
        value="Agency"
        label="Agency"/>
      <FishTankBGButton 
        v-model="bgValue"
        value="Lobbyist"
        label="Lobbyist"/>
      <FishTankBGButton 
        v-model="bgValue"
        value="Contractors"
        label="Contractors"
        disabled/>
    </FishTankButtonGroup>
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
      bgValue:"All"
    }
  }
})
</script>
