<template>
  <base-alert
    :heading="heading"
    :class="$style.error">
    <WarningIcon
      slot="icon"
      :scale="1"
      :class="$style.icon"/>
    <slot/>
  </base-alert>
</template>

<script lang='ts'>
import Vue from "vue"
import BaseAlert from "./BaseAlert.vue"
import { Warning32 as WarningIcon }  from "@fishtank/icons-vue"

export default {
  name: "AlertError",
  components: {
    BaseAlert,
    WarningIcon
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>

<style module lang="scss">
  @import '../styles/variables-custom-properties';
  @import '../styles/mixins';
  
  .error {
    background-color: var(--error-background, $color-error-lightest);
    border-color: var(--error-border, $color-error);

    .icon {
      color: var(--error-border, $color-error);
    }
  }
</style>
