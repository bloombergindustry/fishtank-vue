<template>
  <base-alert
    :heading="heading"
    :class="$style.success">
    <slot/>
  </base-alert>
</template>

<script lang="ts">
import Vue from "vue"
import BaseAlert from "./BaseAlert.vue"

export default Vue.extend({
  name: "AlertSuccess",
  components: {
    BaseAlert
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  }
})
</script>

<style module lang="scss">
  @import '../styles/mixins';

  .success {
    background-color: var(--success-background, $success-background);
    border-color: var(--success-border, $success-border);
  }


</style>

