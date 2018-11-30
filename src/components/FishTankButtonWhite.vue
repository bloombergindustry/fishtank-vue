<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--white"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonWhite",
  introduction: "White Button",
  description: "White Button",
  token:[`
    <FishTankButtonWhite>Primary Button</FishTankButtonWhite>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>
