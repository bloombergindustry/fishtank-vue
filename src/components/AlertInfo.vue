<template>
  <base-alert
    :heading="heading"
    :class="$style.info">
    <slot/>
  </base-alert>
</template>

<script lang="ts">
import Vue from "vue"
import BaseAlert from "./BaseAlert.vue"

export default Vue.extend({
  name: "AlertInfo",
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

  .info {
    background-color: var(--info-background, $color-selected-lightest);
    border-color: var(--info-border, $color-selected);
  }
</style>
