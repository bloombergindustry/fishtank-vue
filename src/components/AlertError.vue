<template>
  <BaseAlert
    :heading="heading"
    class="ft-alert--error"
  >
    <WarningIcon
      slot="icon"
      :scale="1"
      class="ft-alert__icon"
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