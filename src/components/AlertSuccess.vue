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
  :root {
    --success-background:var(--color-action-lightest);
    --success-border:var(--color-action-lighter);
  }
  .success {
    background-color: var(--success-background);
    border-color: var(--success-border);
  }


</style>

