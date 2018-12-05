<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--feature-label"
    v-on="$listeners"
  >

    <slot/>

  </FishTankBaseButton>

</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonFeatureIcon",
  introduction: "Feature Icon Button",
  description: "Feature Icon Button",
  token:[`
    <FishTankButtonFeatureIcon> <Alert24/> </FishTankButtonFeatureIcon>
  `],
  components: {
    FishTankBaseButton,
  },
  props:{
   
  },

  computed:{
    
  }
})
</script>
