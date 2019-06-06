<template>
  <div>
    <badge text-color="btaxBlue">Badge</badge>
    <br />
    <br />
    <br />
    <br />
    <div class = "center">
      <badgeV2 :indeterminate="true" theme="bgov" text-shade="light">
        <template v-slot:badge_content>10000</template>
        <template v-slot:content>
            <img src = '..\..\assets\ft-button-outline-dark.png' />
        </template>
      </badgeV2>
    </div>
    

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankBadge } from '@/index'
import { FishTankBadgeV2 } from '@/index'
 
export default Vue.extend({
  components:{
    badge:FishTankBadge,
    badgeV2:FishTankBadgeV2
  }
})
</script>
<style lang="scss">
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
  }

  img {
    height:75px;
    width:250px;
  }
  :root {
    // --badge-background-color:#000
  }
</style>
