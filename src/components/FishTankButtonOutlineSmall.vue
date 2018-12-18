<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--outline ft-button--outline-small"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineSmall",
  introduction: "Small Outline Button",
  description: "Small Outline Button",
  token:[`
    <FishTankButtonOutlineSmall>Filter</FishTankButtonOutlineSmall>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
