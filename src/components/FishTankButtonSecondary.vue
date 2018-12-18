<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--secondary"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonSecondary",
  introduction: "Secondary Button",
  description: "Secondary Button",
  token:[`
    <FishTankButtonSecondary>Options</FishTankButtonSecondary>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
