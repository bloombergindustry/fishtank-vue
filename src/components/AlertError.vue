<template>
  <BaseAlert
    :heading="heading"
    class="alert--error"
  >
    <WarningIcon
      slot="icon"
      :scale="1"
      class="alert__icon"
    />
    <slot/>
  </BaseAlert>
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

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";
  
  .alert--error {
    background-color: $color-error-lightest;
    border-color: $color-error;

    .alert__icon {
      color: $color-error;
    }
  }
</style>
