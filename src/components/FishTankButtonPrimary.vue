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
  name: "FishTankButtonPrimary",
  introduction: "Primary Button",
  description: "Primary Button",
  token:[`
    <FishTankButtonPrimary>
      Save</FishTankButtonPrimary>
  `,`
  <FishTankButtonPrimary 
    :block="true">
    Button Primary</FishTankButtonPrimary>
  `,
  `<FishTankButtonPrimary 
    @click="handleClick"
    >Button Primary</FishTankButtonPrimary>`,
  `<FishTankButtonPrimary
    :disabled="falsyVariable"
    :block="truthyVariable"
    >Button Primary</FishTankButtonPrimary>`
  ],
  components: {
    FishTankBaseButton
  }
})
</script>
