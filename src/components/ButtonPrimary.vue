<template>
  <BaseButton
    v-bind="$attrs"
    class="ft-button--primary"
    v-on="$listeners"
  >
    <slot/>
  </BaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import BaseButton from "./BaseButton.vue"

export default Vue.extend({
  name: "ButtonPrimary",
  components: {
    BaseButton
  }
})
</script>
