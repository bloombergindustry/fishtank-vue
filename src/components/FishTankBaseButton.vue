<template>
  <button
    :class="{ 'button': true, 'button--disabled': disabled, 'button--block': block }"
    :disabled="disabled"
    type="button"
    v-on="listeners"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from "vue"
import a11y from '@/util/a11y'

export default Vue.extend({
  name: "BaseButton",
  mixins:[
    a11y
  ],
  props: {
    disabled: {
      type: Boolean,
      default: false,
      description:"Specify if button should be disabled"
    },
    block: {
      type: Boolean,
      default: false,
      description: "Changes Button to full width block element"
    },
    name:{
      type: String,
      default:"",
      required:false,
      description: "Optional name of the button, which can be used with the form data."
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
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  body.user-is-tabbing button:focus {
    box-shadow: 0 0 0 2px $color-selected;
  }

  .baseButton{
    @include baseButton();
  }
  .baseButtonSm{
    @include baseButtonSm();
  }
  .button {
    @include baseButton();
    box-sizing: border-box;

    border-radius: 2px;
    border-width: 1px;
    border-style: solid;

    outline: none;

    &:active,
    &:hover {
      cursor: pointer;

      &:disabled {
        cursor: default;
        box-shadow: none;
      }
    }

    &:active {
      box-shadow: none;
    }

  }

  .button--block {
    display: block;
    width: 100%;
  }
</style>
