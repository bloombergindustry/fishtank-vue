<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--outline-dark"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineDark",
  introduction: "Dark Outline Button",
  description: "Dark Outline Button",
  token:[`
    <FishTankButtonOutlineDark>Filter</FishTankButtonOutlineDark>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
