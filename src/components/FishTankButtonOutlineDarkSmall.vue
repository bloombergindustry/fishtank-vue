<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--outline-dark ft-button--outline-small"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineDarkSmall",
  introduction: "Small Dark Outline Button",
  description: "Small Dark Outline Button",
  token:[`
    <FishTankButtonOutlineDarkSmall>Small Dark Outline Button</FishTankButtonOutlineDarkSmall>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
