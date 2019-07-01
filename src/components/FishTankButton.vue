<template>
  <button
    v-bind="$attrs"
    :class="['button', 'a11y', role, (small ? 'small':'large'), {'block':block}]"
    :disabled="disabled"
    v-on="listeners">
    <ftext 
      :semi-bold="(role !=='secondary')"
      :size="(small ? 'baseMd' : 'baseLg')"
      class="text">
      <slot />
    </ftext>
  </button>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankText from './FishTankText.vue'

/** Event fired on click
 * @event click
 * @type {Event}
 */

export default Vue.extend({
  name: "FishTankButton",
  components:{
    ftext:FishTankText
  },
  props:{
    /**
     * Button orientation, inline block, or full width block
     */
    block: {
      type: Boolean,
      default: false,
      description: "Changes Button to full width block element"
    },
    /**
     * Disabled state
     */
    disabled:{
      type:Boolean,
      default:false
    },
    /**
     * Button role
     */
    role:{
      required:false,
      type: String,
      default:"standard"
    },
    small: {
      type:Boolean,
      default:false,
      required:false,
    }
  },
  computed: {
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        click: ($event: MouseEvent) => {
          if (this.disabled) return
          this.$emit("click", $event)
        }
      }
    },
  }
})
</script>
<style lang="scss">
@import '../styles/mixins';
body.user-is-tabbing .a11y:focus {
  box-shadow: 0 0 0 2px $color-selected;
}
</style>

<style scoped lang="scss">
  @import '../styles/mixins';
  body.user-is-tabbing .a11y:focus {
    box-shadow: 0 0 0 2px $color-selected;
  }
  .button {
    box-sizing: border-box;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    outline: none;

    &.block {
      display: flex;
      justify-content: center;
    }
    &.large {
      padding: 6px 11px 10px 11px;
      height: $baseline*10;
    }

    &.small {
      padding: 1px 11px 9px 11px;
      height: $baseline*6;
    }

    &:active {
      box-shadow: none;
    }
    &:disabled{
      opacity: 0.4;
    }
    &.theme {
      background-color:var(--button-background-color);
      border-color:var(--button-border-color);
      @include button-box-shadow($color-white);
      .text {
        color:var(--button-text-color);
      }
      &:hover {
          background-color:var(--button-hover-color);
        }

      &:active {
        background-color:var(--button-active-color);
      }

      &:disabled {
        &:hover {
          background-color:var(--button-disabled-hover-color);
        }
      }
    }
    &.standard {
      background-color: $color-notification-3;
      border-color: $color-notification-3;
      @include button-box-shadow($color-notification-3);
      .text {
        color: $color-white;
      }
      &:hover {
        background-color: $color-notification-3;
      }

      &:active {
        background-color: $color-notification-3;
      }

      &:disabled {
        &:hover {
          background-color: $color-notification-3;
        }
      }
    }

    &.primary, &.success {
      background-color: $color-action;
      border-color: $color-action-darkest;
      @include button-box-shadow($color-action);
      .text {
        color: $color-white;
      }
      &:hover {
        background-color: $color-action-lighter;
      }

      &:active {
        background-color: $color-action-darker;
      }

      &:disabled {
        &:hover {
          background-color: $color-action;
        }
      }
    }
    &.secondary, &.cancel {
      background-color: $color-secondary;
      border-color: $color-gray-lighter;
      .text {
        color: $color-gray-dark;
      }
      @include button-box-shadow($color-secondary);
      &:hover {
        background-color: $color-secondary-lighter;
      }

      &:active {
        background-color: $color-secondary-darker;
      }

      &:disabled {
        &:hover {
          background-color: $color-secondary;
        }
      }
    }

    &.destructive, &.danger {
      background-color: $color-error;
      border-color: $color-error-darkest;
      .text {
        color: $color-white;
      }
      @include button-box-shadow($color-error);
      &:hover {
        background-color: $color-error-lighter;
      }

      &:active {
        background-color: $color-error-darker;
      }

      &:disabled {
        &:hover {
          background-color: $color-error;
        }
      }
    }
    
    &.warning {
      background-color: $color-warning;
      border-color: $color-warning-darkest;
      @include button-box-shadow($color-warning);
      .text {
        color: $color-white;
      }
      &:hover {
        background-color: $color-warning-lighter;
      }

      &:active {
        background-color: $color-warning-darker;
      }

      &:disabled {
        &:hover {
          background-color: $color-warning;
        }
      }
    }

    &.outline {
      background-color: transparent;
      border-color: $color-gray;
      border-width: 2px;
      .text {
        color: $color-gray;
      }
      &:hover {
        background-color: $color-gray;
        .text {
          color: $color-white;
        }
      }
      &:disabled {
        border-color: $color-gray-lighter;
        .text {
          color: $color-gray-lighter;
        }
        &:hover {
          background-color: transparent;

        }
      }
      &:active {
        background-color: $color-gray-dark;
        border-color: $color-gray-dark;
      }
    }
    &:active,&:hover {
      cursor: pointer;
      &:disabled {
        cursor: default;
        box-shadow: none;
      }
    }
  }
</style>
