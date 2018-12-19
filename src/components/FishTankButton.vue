<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--primary"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButton",
  introduction: "Fish Tank Button",
  description: "Fish Tank Button",
  token:[`
    <FishTankButton>
      Save</FishTankButton>
  `],
  components: {
    FishTankBaseButton
  },
  props:{
    primary:{
      type: Boolean,
      default: false
    }
  }
})
</script>
