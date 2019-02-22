<template>
  <div class="card">
    <div
      v-if="branded"
      :class="branded"
      class="card__brand-stripe" />
    <div 
      class="card__container">
      <slot
        :headerClass="'card__heading'"
        name="heading" />
      <div 
        v-if="!$slots.heading && heading"
        class="card__heading"
        role="heading"
        aria-level="3">
        {{ heading }}
      </div>

      <div
        class="card__body">
        <slot />
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
      description:"Card heading text"
    },
    branded: {
      type: String,
      required: false,
      default: undefined,
      description:"Card displays a branded header strip or background color."
    }

  }
})
</script>

<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .card__container {
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
  }

  .card__brand-stripe {
    border-radius: 2px 2px 0 0;
    height: 4px;
  }

  .card__brand-stripe + .card__container {
    .card__heading {
      border-radius: 0;
    }

    .card__body {
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }

  .card__heading {
    border: 1px solid $color-gray-lighter;
    border-radius: 2px 2px 0 0;
    padding: $baseline * 3;
    background-color: $color-gray-lightest;
    font-size: $fontsize-base-lg;
    line-height: $lineheight-base-lg;
    font-family: $font-primary;
    font-weight: $fontweight-semi;
    letter-spacing: $letterspacing-base-lg;
  } 

  .card__body {
    padding: $baseline * 3;
    border-radius: 2px;
    background-color: $color-white;
    border: 1px solid $color-gray-lighter;
  }

  .card__heading + .card__body {
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  .card + .card {
    margin-top: $baseline * 6;
  }

</style>

