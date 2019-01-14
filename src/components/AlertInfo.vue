<template>
  <BaseAlert
    :heading="heading"
    class="alert--info"
  >
    <slot/>
  </BaseAlert>
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

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .alert--info {
    background-color: $color-selection-lightest;
    border-color: $color-selection;

    .alert__icon {
      color: $color-selection;
    }
  }
</style>
