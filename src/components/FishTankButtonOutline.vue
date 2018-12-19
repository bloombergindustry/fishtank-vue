<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--outline"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutline",
  introduction: "Outline Button",
  description: "Outline Button",
  token:[`
    <FishTankButtonOutline>Filter</FishTankButtonOutline>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
