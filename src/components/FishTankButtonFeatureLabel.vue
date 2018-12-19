<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--feature-label"
    v-on="$listeners"
  >

    <slot name="icon"/> 
    <p> 
      <slot name="label" />
    </p>

  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonFeatureLabel",
  introduction: "Feature Label Button",
  description: "Feature Label Button",
  token:[`
    <FishTankButtonFeatureLabel> 
      <template slot="icon"> <Alert24/> </template>
      <template slot="label"> Set Alert</template>
    </FishTankButtonFeatureLabel>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
