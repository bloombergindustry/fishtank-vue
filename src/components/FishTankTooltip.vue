<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  type Orientation = "left" | "auto" | "auto-start" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-end" | "left-start" | undefined;
  import FishTankText from './FishTankText.vue'
  import VTooltip from 'v-tooltip'

  const tooltipOptions = {
    popover: {
      defaultBaseClass: 'ft-tooltip ft-popover',
      defaultInnerClass: 'ft-tooltip-inner ft-popover-inner',
      defaultArrowClass: 'ft-tooltip-arrow ft-popover-arrow',
    }
  }

  Vue.use(VTooltip, tooltipOptions)

  @Component({
    components: {
      VTooltip,
      ftext: FishTankText
    },
  })
  
  export default class FishTankTooltip extends Vue {
    @Prop({
      type: Boolean,
      required: false,
      default: true
    })
    show: Boolean

    @Prop({
      type: Number,
      required: false,
      default: 0
    })
    tooltipOffset: Number

    @Prop({
      type: String,
      required: false,
      default: "'bottom-start'"
    })
    orientation: String

    @Prop({
      type:Boolean,
      required:false,
      default:false
    })
    custom:Boolean

    open = false
    options = {
      popoverInnerClass: this.custom ? 'custom' : null
    }
  }
</script>

<template>
  <v-popover
    :trigger="'hover'"
    :placement="orientation"
    :offset="tooltipOffset"
    :disabled="!show"
    :open="open"
    :popover-inner-class="this.custom ? 'ft-tooltip-inner ft-popover-inner ft-popover-inner-custom' : 'ft-tooltip-inner ft-popover-inner ft-popover-inner-normal'"
    :popover-arrow-class="this.custom ? 'ft-tooltip-arrow ft-popover-arrow ft-popover-arrow-custom' : 'ft-tooltip-arrow ft-popover-arrow ft-popover-arrow-normal'"
    class="clickable help">
    <button
      @focus="open = true" 
      @blur="open = false"
      @keyup.esc="open = false"
      class="tooltip-target">
      <slot name="target" />
    </button>
    <template slot="popover">
      <slot />
    </template>
  </v-popover>
</template>

<style lang="scss">
  @import '../styles/mixins';
  .tooltip-target {
    svg {
      color: $color-link;
    }
  }
  .ft-tooltip {
    display: block;
    z-index: 1000;
    .ft-popover-inner {
      border: 1px solid $color-gray-lighter;
      border-radius: $baseline*0.5;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3); // same as fishtank-card box-shadow
    }
    .ft-popover-inner-normal {
      text-align: left;
      color: $color-black;
      font-size: $fontsize-base-md;
      font-weight: $fontweight-regular;
      line-height: 1.5;
      padding: $baseline-2;
      background-color: $color-background-darker;
    }
    .ft-popover-inner-custom {
      background-color: $color-white;
    }
    .ft-popover-arrow {
      position: absolute;
      height: $baseline*2;
      width: $baseline*2;
      transform: rotate(-45deg);
      border-width: 1px;
      border-style: solid;
      z-index: 1001;
    }

    .ft-popover-arrow-normal {
      background-color: $color-background-darker;
    }

    .ft-popover-arrow-custom {
      background-color: $color-white
    }

    &[x-placement^="top"] {
      .ft-popover-arrow {
        bottom: -$baseline;
        border-color: transparent transparent $color-gray-lighter $color-gray-lighter;
      }
    }
    &[x-placement^="bottom"] {
      .ft-popover-arrow {
        top: -$baseline;
        border-color: $color-gray-lighter $color-gray-lighter transparent transparent;
      }
    }
    &[x-placement^="left"] {
      .ft-popover-arrow {
        right: -$baseline;
        border-color: transparent transparent $color-gray-lighter $color-gray-lighter;
        transform: rotate(-135deg)
      }
    }
    &[x-placement^="right"] {
      .ft-popover-arrow {
        left: -$baseline;
        border-color: $color-gray-lighter $color-gray-lighter transparent transparent;
        transform: rotate(-135deg)
      }
    }
  }
</style>
