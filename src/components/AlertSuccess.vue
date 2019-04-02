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
    
  }
  .success {
    background-color: var(--success-background, $color-action-lightest);
    border-color: var(--success-border, $color-action-lighter);
  }


</style>

