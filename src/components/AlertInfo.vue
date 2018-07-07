<template>
  <BaseAlert
    :heading="heading"
    class="ft-alert--info"
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