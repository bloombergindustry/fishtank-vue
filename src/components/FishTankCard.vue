<template>
  <div class="card">
    <div
      v-if="branded"
      :class="[branded, $style.brandStripe]" />
    <div 
      :class="$style.container">
      <slot
        :headerClass="$style.heading"
        name="heading" />
      <div 
        v-if="!$slots.heading && heading"
        :class="$style.heading"
        role="heading"
        aria-level="3">
        {{ heading }}
      </div>

      <div
        :class="$style.body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * FishTankCard V1
 * @deprecated
 * This component is being deprecated in favor of FishTankCardV2.
 * It will be removed from the library in October of 2019.
 * FishTankCardV2 offers a more standard and consistant API, and better code quality.
 * Please begin using FishTankCardV2 to avoid any breaking changes.
 */
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

  },
  mounted(){
    // eslint-disable-next-line no-console
    console.warn('FishTankCard is being deprecated in favor of FishTankCardV2. FishTankCardV2 provides a more flexible structure to allow developers to more freely layout content, and define paddings and margins. Please migrate to FishTankCardV2.')
  }
})
</script>

<style scoped lang="scss">
@import '../styles/mixins';
.card + .card {
  margin-top: $baseline * 6;
}
</style>

<style module lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .container {
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
  }

  .brandStripe {
    border-radius: 2px 2px 0 0;
    height: 4px;
  }

  .brandStripe + .container {
    .card__heading {
      border-radius: 0;
    }

    .body {
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }

  .heading {
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

  .body {
    padding: $baseline * 3;
    border-radius: 2px;
    background-color: $color-white;
    border: 1px solid $color-gray-lighter;
  }

  .heading + .body {
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

</style>

