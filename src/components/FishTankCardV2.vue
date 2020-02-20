<script lang="ts">
/**
 * @displayName Card V2
 */
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
 @Component({})
export default class CardV2 extends Vue {
  /**
   * Card heading text
   */
  @Prop({
    default:undefined, 
    type:String, 
    required:false
  })
  heading:undefined

  /**
   * Card displays a branded header strip or background color.
   */
  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  branded: undefined

  /**
   * Card displays a custom heading or background color.
   */
  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  customHeadingBg: undefined
  /**
   * Card displays a custom heading or background color.
   */
  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  customHeadingText: undefined

  // Computed methods
  returnBrandStripe() {
    return `background-color: ${this.branded};`
  }

  returnHeaderStripe() {
    return `background-color: ${this.customHeadingBg}; border: none; color:${this.customHeadingText};`
  }
}

</script>

<template>
  <div class="ft-card">
    <div
      v-if="branded"
      :style="returnBrandStripe()" 
      class="branded brandStripe" />
    <div 
      class="ft-card-container">
      <slot
        :headerClass=" heading"     
        name="heading" />
      <div 
        v-if="!$slots.heading && heading"
        :style="customHeadingBg ? returnHeaderStripe() :'' "
        class="ft-card-heading"
        role="heading"
        aria-level="3">
        {{ heading }}
      </div>

      <div
        class="ft-card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  /* Import global font CDN link */
  @import '../../node_modules/@fishtank/type/dist/index.scss';
  @import '../styles/mixins';
  @import url($cdn-url);
  .ft-card + .ft-card {
    margin-top: $baseline * 6;
  }
</style>

<style scoped lang="scss">
  @import '../styles/mixins';

  .ft-card-container {
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
  }

  .brandStripe {
    border-radius: 2px 2px 0 0;
    height: 4px;
  }

  .brandStripe + .ft-card-container {
    .card__heading {
      border-radius: 0;
    }

    .ft-card-body {
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }

  .ft-card-heading {
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

  .ft-card-body {
    // padding: $baseline * 3;
    border-radius: 2px;
    background-color: $color-white;
    border: 1px solid $color-gray-lighter;
  }

  .ft-card-heading + .ft-card-body {
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

</style>

