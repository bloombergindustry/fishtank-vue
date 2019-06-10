<template>
  <div>
    <badge text-color="btaxBlue">Badge</badge>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankBadge } from '@/index'
import { FishTankNumberBadge } from '@/index'
 
export default Vue.extend({
  components:{
    badge:FishTankBadge
  }
})
</script>
<style lang="scss">
  :root {
    // --badge-background-color:#000
  }
</style>
