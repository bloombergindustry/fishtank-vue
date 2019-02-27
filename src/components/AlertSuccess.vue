<template>
  <BaseAlert
    :heading="heading"
    :class="$style.success">
    <slot/>
  </BaseAlert>
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
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .success {
    background-color: $color-action-lightest;
    border-color: $color-action-lighter;
  }


</style>

