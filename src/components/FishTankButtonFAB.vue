<script lang="ts">
/**
 * @display Floating Action Button
 * Button sits above content in a fixed position.
 * Can take an icon or icon and label; Labels can only be ~2 characters long.
 */
import Vue from "vue";
import FishTankText from './FishTankText.vue';
const defaultColorStart = require("@fishtank/colors/dist/index.common").colorBgovNavy;
const defaultColorEnd = require("@fishtank/colors/dist/index.common").colorBgovPurple;
const colorWhite = require("@fishtank/colors/dist/index.common").colorWhite;

export default Vue.extend({
  components:{
    ftext: FishTankText
  },
  props: {
    /**
     * Show drawer containing child FAB buttons
     */
    optionsAvailable: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * FAB button background color.
     */
    background: {
      type: String,
      required: false,
      default: "black"
    },
    /**
     * FAB button gradient start color.
     */
    colorStart: {
      type: String,
      required: false,
      default: "black"
    },
    /**
     * FAB button gradient end color.
     */
    colorEnd: {
      type: String,
      required: false,
      default: undefined
    },
    /**
     * FAB button icon and text color.
     */
    color:{
      type: String,
      required: false,
      default: colorWhite
    },
    /**
     * FAB button disabled.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    returnPrimaryFabColor(): string {
      if (this.colorEnd === undefined) {
        return `background-color: ${this.background || this.colorStart}`;
      }
      return `background-image:  linear-gradient( 135deg, ${this.colorStart} 0%, ${this.colorEnd} 100% ); 
      border-image:  linear-gradient( 135deg, ${this.colorStart} 0% , ${this.colorEnd} 100% ) 1% ; `;
    },
    iconAndLabelSlots () {
      return (this as any).$slots.icon && (this as any).$slots.label;
    },
    listeners(): Record<string, Function | Function[] | Boolean | undefined> {
      return {
        ...this.$listeners,
        click: ($event: MouseEvent) => {
          if (this.disabled) return;
          /**
           * Mouse click event.
           * @event click
           * @type {Event}
           */
          (this as any).$emit("click", $event);
        }
      };
    }
  },
  methods: {}
});
</script>

<template>
  <div :class="['fab-wrapper', iconAndLabelSlots ? 'fab-icon-and-label' : 'fab-icon']">
    <button
      v-bind="$attrs"
      :style="returnPrimaryFabColor"
      :class="['fab']"
      v-on="$listeners"
    >
      <div class="fab-icon">
        <!-- @slot Icon slot; place an SVG icon here -->
        <slot name="icon"/>
      </div>
      <div class="fab-label">
        <ftext size="baseMd" color="white" uppercase semi-bold>
          <!-- @slot Label slot; WARNING - FABs are intended for use with icons only. The space afforded for labels only account for approximately 3 characters. -->
          <slot name="label"/>
        </ftext>
      </div>
    </button>

  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../../node_modules/@fishtank/colors/dist/index";
@import "../../node_modules/@fishtank/type/dist/index";

.fab-wrapper {
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 49;
  display: flex;
  flex-direction: center;
  align-items: center;
  border-color: $color-action;
  background-color: none;
  text-align: center;
  .fab {
    position: relative;
    z-index: 50;
    background-color: $color-black;
    border-image: transparent;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
    outline: transparent;
    &> * {
      color: white;
    }
    &:hover, &:focus {
      box-shadow: 0 0 0 2px $color-selected;
    }
    &:active {
      box-shadow: none;
    }
  }
  .fab-icon > *{
    color:$color-white;
  }
}
</style>
