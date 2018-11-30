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

import FishTankButtonFeatureIcon from "./FishTankButtonFeatureIcon.vue"

export default Vue.extend({
  name: "ButtonFeatureLabel",
  introduction: "Feature Label Button",
  description: "Feature Label Button",
  token:[`
    <ButtonFeatureLabel> 
      <template slot="icon"> <Alert24/> </template>
      <template slot="label"> Button Feature Label</template>
    </ButtonFeatureLabel>
  `],
  components: {
    FishTankBaseButton,
    FishTankButtonFeatureIcon,
  }
})
</script>
