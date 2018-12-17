<template>
  <div class="ft-card">
    <div
      v-if="branded"
      :class="branded"
      class="ft-card__brand-stripe"
      v-bind:area-label="cardBrand"
    />
    <div 
      class="ft-card__container"
      v-bind:aria-label="cardContainer"
    >
      <slot
        :headerClass="'ft-card__heading'"
        name="heading"
      />
      <div 
        v-bind:aria-label="cardHeading"
        v-if="!$slots.heading && heading"
        class="ft-card__heading"
      >
        {{ heading }}
      </div>

      <div
        class="ft-card__body"
        v-bind:aria-label="cardContent"
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
    },
    cardContainer: {
      type: String,
      required: false,
      default: undefined
    },
    cardHeading: {
      type: String,
      required: false,
      default: undefined
    },
    cardContent: {
      type: String,
      required: false,
      default: undefined
    },
    cardBrand:{
      type: String,
      required: false,
      default: undefined
    }

  }
})
</script>
