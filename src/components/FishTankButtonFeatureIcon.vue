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
  name: "ButtonFeatureIcon",
  introduction: "Feature Icon Button",
  description: "Feature Icon Button",
  token:[`
    <ButtonFeatureIcon> <Alert24/> </ButtonFeatureIcon>
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
