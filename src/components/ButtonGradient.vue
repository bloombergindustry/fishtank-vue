<template>
  <a class="ft-button--wrapper" href="#">
  <BaseButton 
    v-bind="$attrs"
    class="ft-button--gradient"
    v-on="$listeners"
  >
    <slot/>
  </BaseButton>
  </a>
</template>

<script lang="ts">
import Vue from "vue"
import BaseButton from "./BaseButton.vue"

export default Vue.extend({
  name: "ButtonGradient",
  components: {
    BaseButton
  },
})
</script>
