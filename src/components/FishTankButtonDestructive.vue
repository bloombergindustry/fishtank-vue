<template>
  <FishTankBaseButton 
    v-bind="$attrs"
    class="ft-button--destructive"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonDestructive",
  introduction: "Destructive Button",
  description: "Destructive Button",
  token:[`
    <FishTankButtonDestructive>Destructive Button</FishTankButtonDestructive>
  `],
  components: {
    FishTankBaseButton
  },
})
</script>
