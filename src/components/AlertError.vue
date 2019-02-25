<template>
  <BaseAlert
    :heading="heading"
    :class="$style.error">
    <WarningIcon
      slot="icon"
      :scale="1"
      :class="$style.icon"/>
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

<style module lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";
  
  .error {
    background-color: $color-error-lightest;
    border-color: $color-error;

    .icon {
      color: $color-error;
    }
  }
</style>
