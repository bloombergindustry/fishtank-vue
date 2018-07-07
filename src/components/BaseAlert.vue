<template>
  <div class="ft-alert">
    <div 
      v-if="hasIcon" 
      class="ft-alert__icon"
    >
      <slot name="icon"/>
    </div>
    <div class="ft-alert__content">
      <div class="ft-alert__heading">{{ heading }}</div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "BaseAlert",
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  computed: {
    hasIcon(): boolean {
      return !!this.$slots.icon
    }
  }
})
</script>
