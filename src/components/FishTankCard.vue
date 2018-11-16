<template>
  <div class="ft-card">
    <div
      v-if="branded"
      :class="branded"
      class="ft-card__brand-stripe"
    />
    <div class="ft-card__container">
      <slot
        :headerClass="'ft-card__heading'"
        name="heading"
      />
      <div
        v-if="!$slots.heading && heading"
        class="ft-card__heading"
      >
        {{ heading }}
      </div>

      <div
        class="ft-card__body"
      >
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: false,
      default: undefined,
    },
    branded: {
      type: String,
      required: false,
      default: undefined,
    }
  }
})
</script>
